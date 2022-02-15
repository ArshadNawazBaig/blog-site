import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
  padding-bottom: 22px;
  padding-top: 22px;
  & .storyImg {
    margin-right: 20px;
    width: 80px;
    height: 80px;
    border-radius: 100%;
  }
`;
export const ContentWrapper = styled.div``;
export const CardHeading = styled.div`
  font-size: 17px;
  font-weight: 600;
  line-height: 19px;
  color: #000;
  font-family: Jost;
`;
export const CardTime = styled.div`
  font: normal 500 12px Poppins;
  margin-top: 4px;
  color: #828080;
  & .timeImg {
    margin-top: 0;
  }
`;
