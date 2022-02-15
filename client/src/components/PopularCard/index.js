import { CardWrapper, ContentWrapper, CardHeading, Serial} from "./style";
export const PopularCard = ({ imgUrl, heading,index}) => {
  return (
    <CardWrapper>
      <img className="img-fluid storyImg" src={imgUrl} />
      <ContentWrapper>
      <Serial>{index+1}</Serial>
        <CardHeading>{heading}</CardHeading>
        
      </ContentWrapper>
    </CardWrapper>
  );
};
