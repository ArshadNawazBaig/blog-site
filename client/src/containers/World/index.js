import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Heading } from "../../components/Heading";
import { PostCard } from "../../components/PostCard";
import { PostRoundCard } from "../../components/PostRoundCard";
import { titleHelper } from "../../helpers";

export const World = ({posts}) => {
  return (
    <>
      <Container className="py-4">
        <Row>
          <Col className="py-3">
            <Heading>WORLD</Heading>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="">
            <PostCard
              title="Google To Boost Android Security In Few Days"
              username="Arshad"
              time="12 months ago"
              full
              category="calture"
            />
          </Col>
          <Col md={3} className="h-100">
            <Row>
              <Col className="">
                <PostCard
                  title="Google To Boost Android Security In Few Days"
                  username="Arshad"
                  time="12 months ago"
                  imageUrl="https://1.bp.blogspot.com/-pv151r3zopI/YE5KmCTHRTI/AAAAAAAAFj4/38olhxfy_dgm5zsTYQ4LHNrAMJW25EcSQCLcBGAsYHQ/s300-rw/travel.jpg"
                  category="Sports"
                />
              </Col>
            </Row>
            <Row>
              <Col className="mt-4">
                <PostCard
                  title="Google To Boost Android Security In Few Days"
                  username="Arshad"
                  time="12 months ago"
                  imageUrl="https://1.bp.blogspot.com/-eOqnmrUJhGs/YFC5lJlr9II/AAAAAAAAFk4/1wlhjH9vPKYJTGo_zFOoxd7ugwK2yfQuwCLcBGAsYHQ/s960-rw/photo-1508431813569-560d91b7e10cghffhffh.jpg"
                  category="pakistan"
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
                  />
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};
