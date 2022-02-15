import styled from "styled-components";
import { Link as Tag } from "react-router-dom";

export const CardWrapper = styled.div``;
export const ContentWrapper = styled.div`
  position: relative;
  &:hover .title-tag {
    background-size: 100% 100%;
    transition: background-size 0.6s !important;
  }
`;
export const CardHeading = styled(Tag)`
  width: calc(100%);
  margin: 22px 10px 1px 19px;
  text-transform: capitalize;
  color: #151515 !important;
  font: normal 600 17px Jost;
  line-height: 20px;
  background-image: linear-gradient(transparent calc(100% - 3px), #212121 3px);
  background-repeat: no-repeat;
  background-size: 0% 100%;
  text-decoration: none;
`;
export const Serial = styled.div`
  color: #ffffff;
  background: #4886ec;
  border-radius: 2px;
  font-size: 14px;
  padding: 8px 18px;
  top: -40px;
  left: 16px;
  position: absolute;
  z-index: 999;
  font-family: "Jost";
`;
