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
export const PostCard = ({full, imageUrl, category, title, username, time, postId }) => {
  return (
    <>
      <CardWrapper>
        <CardLink to={`/posts/${postId}`}>
          <CardImgWrapper
            full={full}
            imageUrl={imageUrl}
            className="card-image"
          ></CardImgWrapper>
        </CardLink>
        <ContentWrapper>
          <CategoryTag to={`/categories/${category}`} category={category}>{category ? category : 'All'}</CategoryTag>
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
