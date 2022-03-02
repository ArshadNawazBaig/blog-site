import styled, { css } from "styled-components";
import { Link as ImgLink } from "react-router-dom";

export const CardWrapper = styled.div`
  visibility: visible;
  position: relative;
  overflow: hidden;
  height: 100%;
  &:hover {
    .card-image {
      transform: scale(1.04);
    }
  }
`;

export const CardLink = styled(ImgLink)`
  color: #c41515;
  text-decoration: none;
`;

export const CardImgWrapper = styled.div`
  ${(props) => {
    return props.full
      ? css`
          height: 100%;
          @media (max-width: 768px) {
            height: 300px;
          }
        `
      : css`
          height: 300px;
        `;
  }}
  ${(props) => {
    return props.imageUrl
      ? css`
          background: #151515 url(${props.imageUrl}) no-repeat center;
        `
      : css`
          background: #151515
            url(https://1.bp.blogspot.com/-x0367tk0G7M/YFC5NS-GN7I/AAAAAAAAFk0/vovvErpkwtgk4Rzn30VH1NxWhOMTVpP_gCLcBGAsYHQ/s960-rw/girl-yellow-folwers.jpg)
            no-repeat center;
        `;
  }}
  background-size: cover;
  transition: all 0.6s;
  position: relative;
  &:before {
    background: rgba(0, 0, 0, 0)
      linear-gradient(to bottom, transparent 0, #111111 100%) repeat scroll 0 0;
    content: "";
    height: 200px;
    left: 0;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  bottom: 18px;
  position: absolute;
  cursor: pointer;
  & .heading-tag:hover  {
    background-size: 100% 100%;
    transition: background-size 0.6s;
    color: #fff !important;
  }
`;

export const CategoryTag = styled(ImgLink)`
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
  margin-left: 20px;
  padding: 3px 7px;
  text-transform: uppercase;
  text-decoration: none;
  &:hover {
    color: #fff;
  }
`;

export const CardHeading = styled.div`
  ${({ full }) => {
    return full
      ? css`
          font-size: 26px;
        `
      : css`
          font-size: 20px;
        `;
  }}
  line-height: 34px;
  color: #fff;
  font-family: "Jost";
  padding: 0 20px;
  word-spacing: -1px;
  margin: 2px 0;
  font-weight: 600;
`;

export const HeadingTag = styled.a`
  color: #fff;
  width: calc(100%);
  background-image: linear-gradient(
    transparent calc(100% - 3px),
    #ffffff 3px
  );
  background-repeat: no-repeat;
  background-size: 0% 100%;
  text-decoration: none;
`;

export const UserDetails = styled.div`
  color: #fff;
  font-size: 11px;
  margin-left: 23px;
  margin-right: 10px;
  display: inline-block;
  font: normal 500 12px "Poppins";
  margin-top: 1px;
  line-height: inherit;
`;

export const Dot = styled.div`
  background: #b8b8b8;
  border-radius: 100%;
  display: inline-block;
  height: 5px;
  margin-right: -10px;
  position: relative;
  top: -1px;
  width: 5px;
`;

export const Time = styled.div`
  color: #fff;
  font-size: 11px;
  display: inline-block;
  font: normal 500 12px Poppins;
  margin-top: 1px;
  line-height: inherit;
  margin-left: 23px;
`;
