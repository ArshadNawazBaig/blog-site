import styled from "styled-components";
import { Link as Tag } from "react-router-dom";

export const FooterWrapper = styled.div`
  background: #000;
  padding: 40px 0;
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
    width: 100px;
    height: 70px;
  }
`;

export const Content = styled.div``;
