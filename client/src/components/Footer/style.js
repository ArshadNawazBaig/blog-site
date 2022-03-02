import styled, { css } from "styled-components";
import { Link as Tag } from "react-router-dom";

export const FooterWrapper = styled.div`
  background: #000;
  padding: 40px 0 16px 0;
`;

export const Intro = styled.div`
  color: #cccccc !important;
  font: normal 400 15px Jost;
  text-decoration: none;
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const ContactLink = styled(Tag)`
  display: inline-block;
  color: #cccccc !important;
  font: normal 400 15px Jost;
  text-decoration: none;
  margin-bottom: 15px;
  & svg {
    margin-right: 15px;
  }
`;

export const Title = styled.div`
  color: #d2d2d2;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.3px;
  margin-bottom: 10px;
  padding-bottom: 4px;
  text-transform: uppercase;
`;

export const PostCard = styled(Tag)`
  color: #cccccc !important;
  font: normal 400 15px Jost;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  & img {
    margin-right: 15px;
    height: 65px;
    object-fit: cover;
    width: 65px;
    border-radius: 4px;
    // border: 1px solid;
    // &.sport {
    //   border-color: #ef559a;
    // }
    // &.calture {
    //   border-color: #f58134;
    // }
  }
`;

export const Content = styled.div``;

export const CopyWriteWrapper = styled.div`
  background: #000000;
  border-top: 1px solid #151515;
  color: #767676;
  font: normal 400 12px Poppins;
  letter-spacing: 0.5px;
`;

export const CopyWriteWrapperInner = styled.div``;

export const CopyWrite = styled.div``;

export const CopyText = styled.div``;
