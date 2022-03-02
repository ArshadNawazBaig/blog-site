import {
  CardWrapper,
  ContentWrapper,
  CategoryTag,
  CardHeading,
  Time,
} from "./style";
import clock from "./../../assets/time.png";
import { useNavigate } from "react-router-dom";
export const LifeStyleCard = ({ imgUrl, heading, category, time, postId }) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/categories/${category}`);
  }
  return (
    <CardWrapper to={`/posts/${postId}`}>
      <img className="img-fluid storyImg" src={imgUrl} />
      <ContentWrapper className="mt-3">
        <div>
          <CategoryTag onClick={(e) => handleClick(e)} category={category}>
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
