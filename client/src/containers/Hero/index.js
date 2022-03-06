import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Empty } from "../../components/Empty";
import { Loader } from "../../components/Loader";
import { PostCard } from "../../components/PostCard";
import { titleHelper } from "../../helpers";

export const Hero = ({ posts, loading }) => {
  return (
    <>
      <Container fluid>
        {loading ? (
          <Loader background="white" align="center" height="610px" />
        ) : posts.length > 0 ? (
          <Row>
            <Col md={5} className="ps-0 pe-1">
              <PostCard
                postId={posts.length > 0 ? posts[0]._id : ""}
                title={posts.length > 0 ? titleHelper(posts[0].title, 45) : ""}
                username={posts.length > 0 ? posts[0].username : ""}
                time="12 months ago"
                imageUrl={posts.length > 0 ? posts[0].photo : ""}
                category={posts.length > 0 ? posts[0].categories[0] : ""}
                full
              />
            </Col>
            <Col className="h-100">
              <Row>
                <Col className="mb-2 pe-0 ps-1">
                  <PostCard
                    postId={posts.length > 0 ? posts[1]._id : ""}
                    title={
                      posts.length > 1 ? titleHelper(posts[1].title, 55) : ""
                    }
                    username={posts.length > 1 ? posts[1].username : ""}
                    time="12 months ago"
                    imageUrl={posts.length > 1 ? posts[1].photo : ""}
                    category={posts.length > 1 ? posts[1].categories[0] : ""}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="pe-1 ps-1">
                  <PostCard
                    postId={posts.length > 0 ? posts[2]._id : ""}
                    title={
                      posts.length > 2 ? titleHelper(posts[2].title, 55) : ""
                    }
                    username={posts.length > 2 ? posts[2].username : ""}
                    time="12 months ago"
                    imageUrl={posts.length > 2 ? posts[2].photo : ""}
                    category={posts.length > 2 ? posts[2].categories[0] : ""}
                  />
                </Col>
                <Col className="ps-1 pe-0">
                  <PostCard
                    postId={posts.length > 0 ? posts[3]._id : ""}
                    title={
                      posts.length > 3 ? titleHelper(posts[3].title, 55) : ""
                    }
                    username={posts.length > 3 ? posts[3].username : ""}
                    time="12 months ago"
                    imageUrl={posts.length > 3 ? posts[3].photo : ""}
                    category={posts.length > 3 ? posts[3].categories[0] : ""}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        ) : <Empty height={500} justify="center" fontSize={20}>No posts found</Empty>}
      </Container>
    </>
  );
};
