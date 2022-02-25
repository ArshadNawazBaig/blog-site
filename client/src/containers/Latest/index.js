import { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Heading } from "../../components/Heading";
import { LatestCard } from "../../components/LatestCard";
import { Loader } from "../../components/Loader";
import Ad from "./../../assets/ad.jpg";
import { AdWrapper } from "./style";
export const Latest = ({ posts, loading }) => {
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
    <>
      <Container className="py-4">
        <Row>
          <Col className="py-3">
            <Heading>Latest</Heading>
          </Col>
          {loading ? (
            <Row>
              <Col>
                <Loader />
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                {popularPosts &&
                  popularPosts.map((post, index) => (
                    <Col md={12} className="" key={index} className="mb-5">
                      <LatestCard post={post} />
                    </Col>
                  ))}
              </Col>
              <Col className="py-3 col-3">
                <AdWrapper className="">
                  <img className="img-fluid" src={Ad} />
                </AdWrapper>
              </Col>
            </Row>
          )}
        </Row>
      </Container>
    </>
  );
};
