import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { PostCard } from "../../components/PostCard";

export const Hero = ({posts}) => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={5} className="ps-0 pe-1">
          <PostCard title="Google To Boost Android Security In Few Days" username="Arshad" time="12 months ago" imageUrl="https://1.bp.blogspot.com/-x0367tk0G7M/YFC5NS-GN7I/AAAAAAAAFk0/vovvErpkwtgk4Rzn30VH1NxWhOMTVpP_gCLcBGAsYHQ/s960-rw/girl-yellow-folwers.jpg" category="Sports" full />
          </Col>
          <Col className="h-100">
            <Row>
              <Col className="mb-2 pe-0 ps-1">
                <PostCard title="Google To Boost Android Security In Few Days" username="Arshad" time="12 months ago" imageUrl="https://1.bp.blogspot.com/-eOqnmrUJhGs/YFC5lJlr9II/AAAAAAAAFk4/1wlhjH9vPKYJTGo_zFOoxd7ugwK2yfQuwCLcBGAsYHQ/s960-rw/photo-1508431813569-560d91b7e10cghffhffh.jpg" category="pakistan" />
              </Col>
            </Row>
            <Row>
              <Col className="pe-1 ps-1">
                <PostCard title="Google To Boost Android Security In Few Days" username="Arshad" time="12 months ago" imageUrl="https://1.bp.blogspot.com/-pv151r3zopI/YE5KmCTHRTI/AAAAAAAAFj4/38olhxfy_dgm5zsTYQ4LHNrAMJW25EcSQCLcBGAsYHQ/s300-rw/travel.jpg" category="Sports" />
              </Col>
              <Col className="ps-1 pe-0">
                <PostCard title="Google To Boost Android Security In Few Days" username="Arshad" time="12 months ago" category="trending" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
