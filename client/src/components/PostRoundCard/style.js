import styled from "styled-components";
import { Link as Tag } from "react-router-dom";

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
export const ContentWrapper = styled.div`
  &:hover .title-tag {
    background-size: 100% 100%;
    transition: background-size 0.6s !important;
  }
`;
export const CardHeading = styled(Tag)`
  font-size: 17px;
  font-weight: 600;
  line-height: 19px;
  color: #000 !important;
  font-family: Jost;
  width: calc(100%);
  background-image: linear-gradient(transparent calc(100% - 3px), #212121 3px);
  background-repeat: no-repeat;
  background-size: 0% 100%;
  text-decoration: none;
`;
export const CardTime = styled.div`
  font: normal 500 12px Poppins;
  margin-top: 4px;
  color: #828080;
  & .timeImg {
    margin-top: 0;
  }
`;
