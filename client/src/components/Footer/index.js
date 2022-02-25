import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import LogoLight from "./../../assets/logo-light.png";
import Red from "./../../assets/red-girl.jpg"
import {
  FooterWrapper,
  Intro,
  ContactLink,
  Title,
  PostCard,
  Content,
} from "./style";

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col>
            <Link to="/">
              <img className="img-fluid" src={LogoLight} />
            </Link>
            <Intro>
              Trends is an amazing magazine Blogger theme that is easy to
              customize and change to fit your needs.
            </Intro>
            <ContactLink to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-mail"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              storymug@gmail.com
            </ContactLink>
            <ContactLink to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              +92222-000-0000
            </ContactLink>
          </Col>
          <Col>
            <Title>SPORTS</Title>
            <PostCard to="/">
              <img src={Red} className="img-fluid" />
              <Content>
                Russia names 5 disputed islets in East China sea
              </Content>
            </PostCard>
            <PostCard to="/">
              <img src={Red} className="img-fluid" />
              <Content>
                Russia names 5 disputed islets in East China sea
              </Content>
            </PostCard>
          </Col>
          <Col>
            <Title>CRICKET</Title>
            <PostCard to="/">
              <img src={Red} className="img-fluid" />
              <Content>
                Russia names 5 disputed islets in East China sea
              </Content>
            </PostCard>
            <PostCard to="/">
              <img src={Red} className="img-fluid" />
              <Content>
                Russia names 5 disputed islets in East China sea
              </Content>
            </PostCard>
          </Col>
          <Col>
            <Title>LABELS</Title>
            <ContactLink to="/" className="d-flex justify-content-between">
              Boxing <span>(8)</span>
            </ContactLink>
            <ContactLink to="/" className="d-flex justify-content-between">
              Fashion <span>(8)</span>
            </ContactLink>
            <ContactLink to="/" className="d-flex justify-content-between">
              Health <span>(8)</span>
            </ContactLink>
            <ContactLink to="/" className="d-flex justify-content-between">
              Nature <span>(8)</span>
            </ContactLink>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
};
