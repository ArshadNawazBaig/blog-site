import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Heading } from "../../components/Heading";
import { Loader } from "../../components/Loader";
import { PopularCard } from "../../components/PopularCard";
import { titleHelper } from "../../helpers";

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
              <Loader align="center" height="200px" />
            </Col>
          </Row>
        ) : (
          <Row>
            {popularPosts &&
              popularPosts.map((post, index) => (
                <Col md={3} className="mb-2" key={index}>
                  <PopularCard
                    imgUrl={post.photo}
                    full
                    heading={titleHelper(post.title, 60)}
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
