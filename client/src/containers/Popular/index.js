import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Heading } from "../../components/Heading";
import { Loader } from "../../components/Loader";
import { PopularCard } from "../../components/PopularCard";

export const Popular = ({ posts, loading }) => {
  const [popularPosts, setPopularPosts] = useState([]);
  const filterPopularPosts = async (posts) => {
    return setPopularPosts(posts && posts.slice(0, 4));
  };
  useEffect(() => {
    filterPopularPosts(posts);
  }, [posts]);
  return (
    <>
      <Container className="py-4">
        <Row>
          <Col className="py-3">
            <Heading>Popular</Heading>
          </Col>
        </Row>
        {loading ? (
          <Row>
            <Col>
              <Loader />
            </Col>
          </Row>
        ) : (
          <Row>
            {popularPosts &&
              popularPosts.map((post, index) => (
                <Col md={3} className="" key={index}>
                  <PopularCard
                    imgUrl={post.photo}
                    full
                    heading={post.title}
                    index={index}
                    postId={post._id}
                  />
                </Col>
              ))}
          </Row>
        )}
      </Container>
    </>
  );
};
