import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Heading } from "../../components/Heading";
import { LifeStyleCard } from "../../components/LifeStyleCard";

export const LifeStyle = ({posts}) => {
  const [popularPosts, setPopularPosts] = useState([]);
  const filterPopularPosts = async (posts) => {

    return setPopularPosts(posts && posts.slice(0, 4));
  }
  useEffect(() => {
    filterPopularPosts(posts);
  }, [posts])
  return (
    <>
      <Container className="py-4">
        <Row>
          <Col className="py-3">
            <Heading>Life Style</Heading>
          </Col>
        </Row>
        <Row>
        {popularPosts && popularPosts.map((post, index) => (
          <Col md={3} className="" key={index}>
            <LifeStyleCard
              imgUrl={post.photo}
              heading={post.title}
              category={post.categories[0]}
              time="12 months ago"
            />
          </Col>
        ))}
        </Row>
      </Container>
    </>
  );
};
