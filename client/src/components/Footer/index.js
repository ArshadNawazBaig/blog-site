import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { handleCategoryPosts, titleHelper } from "../../helpers";
import { getPostsAction } from "../../redux/actions/postActions";
import { Loader } from "../Loader";
import LogoLight from "./../../assets/logo-light.png";
import { toast } from "react-toastify";
import {
  FooterWrapper,
  Intro,
  ContactLink,
  Title,
  PostCard,
  Content,
  CopyWriteWrapper,
  CopyWriteWrapperInner,
  CopyWrite,
  CopyText,
} from "./style";
import { Empty } from "../Empty";

export const Footer = () => {
  const dispatch = useDispatch();
  const { loading, error, posts } = useSelector((state) => state.allPosts);
  const [sports, setSports] = useState([]);
  const [calture, setCalture] = useState([]);

  useEffect(() => {
    dispatch(getPostsAction());
  }, [dispatch]);

  useEffect(() => {
    setSports(handleCategoryPosts(posts, "sports"));
    setCalture(handleCategoryPosts(posts, "calture"));
    error && toast.error(error, { position: toast.POSITION.TOP_RIGHT });
  }, [posts, error]);

  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col sm={12} md={6} lg={3}>
            <Link to="/">
              <img className="img-fluid" src={LogoLight} />
            </Link>
            <Intro>
              Trends is an amazing magazine Blogger theme that is easy to
              customize and change to fit your needs.
            </Intro>
            <ContactLink to="/" className="me-2">
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
          <Col sm={12} md={6} lg={3}>
            <Title>SPORTS</Title>
            {loading ? (
              <Loader
                background="none"
                color="white"
                height="100px"
                align="start"
              />
            ) : sports.length > 0 ? (
              <>
                {sports ? (
                  sports.slice(0, 2).map((sport) => (
                    <PostCard to="/" key={sport._id}>
                      <img src={sport.photo} className="img-fluid sport" />
                      <Content>{titleHelper(sport.title, 50)}</Content>
                    </PostCard>
                  ))
                ) : (
                  <div>Hello</div>
                )}
              </>
            ) : <Empty color="white">No Sports posts found</Empty>}
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Title>calture</Title>
            {loading ? (
              <Loader
                background="none"
                color="white"
                height="100px"
                align="start"
              />
            ) : calture.length > 0 ? (
              <>
                {calture &&
                  calture.slice(0, 2).map((cal) => (
                    <PostCard to="/" key={cal._id}>
                      <img src={cal.photo} className="img-fluid calture" />
                      <Content>{titleHelper(cal.title, 50)}</Content>
                    </PostCard>
                  ))}
              </>
            ): <Empty color="white">No Calture posts found</Empty>}
          </Col>
          <Col sm={12} md={6} lg={3}>
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
      <CopyWriteWrapper className="mt-5">
        <Container>
          <CopyWriteWrapperInner className="d-flex justify-content-between align-items-center pt-3">
            <CopyWrite>&copy; 2022 all rights reserved</CopyWrite>
            <CopyText>
              made with{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#f13934"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-heart"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>{" "}
              by NorthSpex
            </CopyText>
          </CopyWriteWrapperInner>
        </Container>
      </CopyWriteWrapper>
    </FooterWrapper>
  );
};
