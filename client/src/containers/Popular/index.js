import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Heading } from "../../components/Heading";
import { PopularCard } from "../../components/PopularCard";

export const Popular = ({posts}) => {
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
            <Heading>Popular</Heading>
          </Col>
        </Row>
        <Row>
        {popularPosts && popularPosts.map((post, index) => (
          <Col md={3} className="" key={index}>
            <PopularCard
              imgUrl="https://1.bp.blogspot.com/-pv151r3zopI/YE5KmCTHRTI/AAAAAAAAFj4/38olhxfy_dgm5zsTYQ4LHNrAMJW25EcSQCLcBGAsYHQ/s300-rw/travel.jpg"
              full
              heading={post.title}
              index={index}
            />
          </Col>
        ))}
        </Row>
      </Container>
    </>
  );
};
