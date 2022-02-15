import {
  CardWrapper,
  CardLink,
  CardImgWrapper,
  ContentWrapper,
  CategoryTag,
  CardHeading,
  HeadingTag,
  UserDetails,
  Dot,
  Time,
} from "./style";
export const PostCard = ({full, imageUrl, category, title, username, time }) => {
  return (
    <>
      <CardWrapper>
        <CardLink to="https://storymagdemo.blogspot.com/2017/01/google-to-boost-android-security-in-few.html">
          <CardImgWrapper
            full={full}
            imageUrl={imageUrl}
            className="card-image"
          ></CardImgWrapper>
        </CardLink>
        <ContentWrapper>
          <CategoryTag to="/search/label/featured" category={category}>{category ? category : 'All'}</CategoryTag>
          <CardHeading full={full}>
            <HeadingTag className="heading-tag">
              {title}
            </HeadingTag>
          </CardHeading>
          <UserDetails>
            <span>by </span>{username}
          </UserDetails>
          <Dot></Dot>
          <Time>{time}</Time>
        </ContentWrapper>
      </CardWrapper>
    </>
  );
};
