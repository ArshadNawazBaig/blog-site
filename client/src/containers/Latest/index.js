import { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Empty } from "../../components/Empty";
import { Heading } from "../../components/Heading";
import { LatestCard } from "../../components/LatestCard";
import { Loader } from "../../components/Loader";
import { SocialShare } from "../../components/SocialShare";
import { Subscribe } from "../../components/Subscribe";
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
                <Loader align="center" height="500px" />
              </Col>
            </Row>
          ) : posts.length > 0 ? (
            <Row>
              <Col sm={12} md={9}>
                {popularPosts &&
                  popularPosts.map((post, index) => (
                    <Col md={12} key={index} className="mb-5">
                      <LatestCard post={post} category={post.categories[0]} />
                    </Col>
                  ))}
              </Col>
              <Col className="py-3" sm={12} md={3}>
                <AdWrapper className="">
                  <img className="img-fluid" src={Ad} />
                  <SocialShare className="mt-3" />
                  <Subscribe className="mt-4" />
                </AdWrapper>
              </Col>
            </Row>
          ) : (
            <Empty height={250} justify="center" fontSize={20}>
              No posts found
            </Empty>
          )}
        </Row>
      </Container>
    </>
  );
};
