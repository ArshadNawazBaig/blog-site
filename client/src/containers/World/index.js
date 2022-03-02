import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Heading } from "../../components/Heading";
import { Loader } from "../../components/Loader";
import { PostCard } from "../../components/PostCard";
import { PostRoundCard } from "../../components/PostRoundCard";
import { titleHelper } from "../../helpers";

export const World = ({ posts, worldPosts, loading }) => {
  return (
    <>
      <Container className="py-4">
        <Row>
          <Col className="py-3">
            <Heading>WORLD</Heading>
          </Col>
        </Row>
        {loading ? (
          <Loader background="white" align="center" height="610px" />
        ) : (
          <Row>
            <Col md={6} className="">
              <PostCard
                postId={worldPosts.length > 0 ? worldPosts[0]._id : ""}
                title={worldPosts.length > 0 ? titleHelper(worldPosts[0].title, 45) : ""}
                username={worldPosts.length > 0 ? worldPosts[0].username : ""}
                time="12 months ago"
                imageUrl={worldPosts.length > 0 ? worldPosts[0].photo : ""}
                category={worldPosts.length > 0 ? worldPosts[0].categories[0] : ""}
                full
              />
            </Col>
            <Col md={3} className="h-100">
              <Row>
                <Col className="">
                  <PostCard
                    postId={worldPosts.length > 0 ? worldPosts[1]._id : ""}
                    title={
                      worldPosts.length > 1 ? titleHelper(worldPosts[1].title, 55) : ""
                    }
                    username={worldPosts.length > 1 ? worldPosts[1].username : ""}
                    time="12 months ago"
                    imageUrl={worldPosts.length > 1 ? worldPosts[1].photo : ""}
                    category={worldPosts.length > 1 ? worldPosts[1].categories[0] : ""}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="mt-4">
                  <PostCard
                    postId={worldPosts.length > 0 ? worldPosts[2]._id : ""}
                    title={
                      worldPosts.length > 2 ? titleHelper(worldPosts[2].title, 55) : ""
                    }
                    username={worldPosts.length > 2 ? worldPosts[2].username : ""}
                    time="12 months ago"
                    imageUrl={worldPosts.length > 2 ? worldPosts[2].photo : ""}
                    category={worldPosts.length > 2 ? worldPosts[2].categories[0] : ""}
                  />
                </Col>
              </Row>
            </Col>
            <Col md={3} className="h-100">
              {posts.map((post, index) => (
                <Row key={index} className="">
                  <Col>
                    <PostRoundCard
                      heading={titleHelper(post.title, 40)}
                      time="12 months ago"
                      imgUrl={post.photo}
                      postId={post._id}
                    />
                  </Col>
                </Row>
              ))}
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};
