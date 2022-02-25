import styled, { css } from "styled-components";
import { Link as Tag } from "react-router-dom";

export const CardWrapper = styled.div``;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 230px;
  ${(props) => {
    return props.src
      ? css`
          background-image: url(${props.src});
        `
      : "";
  }};
  background-size: cover;
  background-position: center;
  position: relative;
  &:before {
    content: "content";
    height: 100%;
    ${({ category }) => {
      if (category)
        switch (category.toLowerCase()) {
          case "featured":
            return css`
              background: #ef7f1f;
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
    position: absolute;
    z-index: -9;
    top: 11px;
    width: 92%;
    margin: 0 auto;
    left: 4%;
    opacity: 0.6;
  }
  &:after {
    content: "content";
    ${({ category }) => {
      if (category)
        switch (category.toLowerCase()) {
          case "featured":
            return css`
              background: #ef7f1f;
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
    height: 100%;
    width: 96%;
    position: absolute;
    z-index: -9;
    top: 5px;
    left: 2%;
    opacity: 0.8;
  }
`;

export const ContentWrapper = styled.div``;

export const Cate = styled.div`
  display: inline-block;
  margin-left: 16px;
  font: normal 300 14px Poppins;
  line-height: 21px;
  text-transform: uppercase;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    ${({ category }) => {
      if (category)
        switch (category.toLowerCase()) {
          case "featured":
            return css`
              background: #ef7f1f;
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
    border-radius: 100%;
    top: 4px;
    left: -16px;
  }
`;

export const TitleWrapper = styled.h1`
  position: relative;
  line-height: 32px;
  &:hover .title-tag {
    background-size: 100% 100%;
    transition: background-size 0.6s !important;
  }
`;

export const Title = styled.span`
  cursor: pointer;
  width: calc(100%);
  text-transform: capitalize;
  color: #000000;
  font: normal 800 22px Poppins;
  line-height: 20px;
  margin-bottom: 7px;
  background-image: linear-gradient(transparent calc(100% - 3px), #212121 3px);
  background-repeat: no-repeat;
  background-size: 0% 100%;
  text-decoration: none;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  & img.user-img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
`;

export const UserName = styled.div`
  color: #828080;
  margin-left: 4px;
  font: normal 400 13px Poppins;
  text-transform: capitalize;
`;

export const Desc = styled.div`
  color: #676767;
  font: normal normal 14px Poppins;
  line-height: 22px;
  position: relative;
`;
