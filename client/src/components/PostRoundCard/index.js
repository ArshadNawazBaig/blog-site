import { CardWrapper, ContentWrapper, CardHeading, CardTime } from "./style";
import timeImg from "../../assets/time.png";
export const PostRoundCard = ({ imgUrl, heading, time }) => {
  return (
    <CardWrapper>
      <img className="img-fluid storyImg" src={imgUrl} />
      <ContentWrapper>
        <CardHeading>{heading}</CardHeading>
        <CardTime>
          <img src={timeImg} className="timeImg img-fluid" />
          {time}
        </CardTime>
      </ContentWrapper>
    </CardWrapper>
  );
};
