import React from "react";
import User from "./../../assets/user.jpg";
import Time from "./../../assets/time.png";
import { Col, Row } from "reactstrap";
import {
  CardWrapper,
  ImageWrapper,
  ContentWrapper,
  Cate,
  Title,
  TitleWrapper,
  UserInfo,
  UserName,
  Desc,
} from "./style";
import { titleHelper } from "../../helpers";

export const LatestCard = ({post}) => {
  return (
    <CardWrapper to="/">
      <Row>
        <Col sm={12} md={5}>
          <ImageWrapper category={post.categories[0]} src={post.photo} />
        </Col>
        <Col sm={12} md={7}>
          <ContentWrapper>
            <Cate category={post.categories[0]}>{post.categories[0]}</Cate>
            <TitleWrapper>
              <Title to="/" className="title-tag">
                {titleHelper(post.title, 60)}
              </Title>
            </TitleWrapper>
            <UserInfo className="mt-3">
              <img src={User} className="user-img me-1" />
              <UserName to="/">{post.username}</UserName>
              <img src={Time} className="ms-4" />
              <UserName to="/">12 months ago</UserName>
            </UserInfo>
            <Desc className="my-3">
              {titleHelper(post.desc, 200)}
            </Desc>
          </ContentWrapper>
        </Col>
      </Row>
    </CardWrapper>
  );
};
