import {
  CardWrapper,
  ContentWrapper,
  CategoryTag,
  CardHeading,
  Time,
} from "./style";
import clock from "./../../assets/time.png";
export const LifeStyleCard = ({ imgUrl, heading, category, time, postId }) => {
  return (
    <CardWrapper to={`/posts/${postId}`}>
      <img className="img-fluid storyImg" src={imgUrl} />
      <ContentWrapper className="mt-3">
        <div>
          <CategoryTag to="/" category={category}>
            {category}
          </CategoryTag>
        </div>
        <CardHeading className="title-tag" to="/">
          {heading}
        </CardHeading>
        <Time>
          <img src={clock} />
          {time}
        </Time>
      </ContentWrapper>
    </CardWrapper>
  );
};
