import { CardWrapper, ContentWrapper, CardHeading, CardTime } from "./style";
import timeImg from "../../assets/time.png";
export const PostRoundCard = ({ imgUrl, heading, time, postId }) => {
  return (
    <CardWrapper>
      <img className="img-fluid storyImg" src={imgUrl} />
      <ContentWrapper>
        <CardHeading className="title-tag" to={`/posts/${postId}`}>{heading}</CardHeading>
        <CardTime>
          <img src={timeImg} className="timeImg img-fluid" />
          {time}
        </CardTime>
      </ContentWrapper>
    </CardWrapper>
  );
};
