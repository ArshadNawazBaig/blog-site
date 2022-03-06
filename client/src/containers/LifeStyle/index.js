import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Empty } from "../../components/Empty";
import { Heading } from "../../components/Heading";
import { LifeStyleCard } from "../../components/LifeStyleCard";
import { Loader } from "../../components/Loader";
import { titleHelper } from "../../helpers";
import { LifeStyleWrapper } from "./style";

export const LifeStyle = ({ posts, loading }) => {
  const [popularPosts, setPopularPosts] = useState([]);
  const filterPopularPosts = async (posts) => {
    return setPopularPosts(posts && posts.slice(0, 4));
  };
  useEffect(() => {
    filterPopularPosts(posts);
    return () => {
      filterPopularPosts([]);
    };
  }, [posts]);
  return (
    <LifeStyleWrapper>
      <Container className="py-4 mb-4">
        <Row>
          <Col className="py-3">
            <Heading>Life Style</Heading>
          </Col>
        </Row>
        {loading ? (
          <Row>
            <Col>
              <Loader align="center" height="200px" />
            </Col>
          </Row>
        ) : posts.length > 0 ? (
          <Row className="mb-4">
            {popularPosts &&
              popularPosts.map((post, index) => (
                <Col md={3} className="margin-on-small" key={index}>
                  <LifeStyleCard
                    imgUrl={post.photo}
                    heading={titleHelper(post.title, 60)}
                    category={post.categories[0]}
                    time="12 months ago"
                    postId={post._id}
                  />
                </Col>
              ))}
          </Row>
        ) : (
          <Empty height={250} justify="center" fontSize={20}>
            No posts found
          </Empty>
        )}
      </Container>
    </LifeStyleWrapper>
  );
};
