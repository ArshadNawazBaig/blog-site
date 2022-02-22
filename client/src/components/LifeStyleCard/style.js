import styled, { css } from "styled-components";
import { Link as ImgLink } from "react-router-dom";

export const CardWrapper = styled(ImgLink)`
  position: relative;
  & .storyImg {
    height: 200px;
    width: 100%;
  }
`;
export const ContentWrapper = styled.div`
  width: 88%;
  background: white;
  position: absolute;
  padding: 10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: -164px;
  &:hover .title-tag {
    background-size: 100% 100%;
    transition: background-size 0.6s !important;
  }
`;
export const CardHeading = styled.span`
  width: calc(100%);
  text-transform: capitalize;
  color: #151515 !important;
  font: normal 600 17px Jost;
  line-height: 20px;
  background-image: linear-gradient(transparent calc(100% - 3px), #212121 3px);
  background-repeat: no-repeat;
  background-size: 0% 100%;
  text-decoration: none;
`;

export const CategoryTag = styled.div`
  ${({ category }) => {
    if (category)
      switch (category.toLowerCase()) {
        case "featured":
          return css`
            background: #e12235;
          `;
        case "sports":
          return css`
            background: #ff469c;
          `;
        case "calture":
          return css`
            background: #f58021;
          `;
        case "pakistan":
          return css`
            background: #32b47b;
          `;
      }
    return css`
      background-color: #4886ec;
    `;
  }}
  margin-bottom: 5px;
  font-size: 11px;
  border-radius: 2px;
  color: #ffffff;
  display: inline-block;
  font: normal 600 11px Jost;
  letter-spacing: 0.3px;
  line-height: 16px;
  height: 24px;
  padding: 3px 7px;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`;
export const Time = styled.div`
  font: normal 500 12px Poppins;
  margin-top: 10px;
  color: #828080;
`;
