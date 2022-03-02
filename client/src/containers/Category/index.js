import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Heading } from "../../components/Heading";
import { LatestCard } from "../../components/LatestCard";
import { Loader } from "../../components/Loader";
import { getPostsByCategory } from "../../network/api/post";
import {
  getPostsByCategoryAction,
  getPostsByCategoryFailAction,
  getPostsByCategoryRequestAction,
} from "../../redux/actions/postActions";
import { CategoryWrapper } from "./style";

export const Category = () => {
  const posts = useSelector((state) => state.categoryPosts.posts);
  const loading = useSelector((state) => state.categoryPosts.loading);
  const params = useParams();
  const dispatch = useDispatch();
  const handleCategoryPosts = () => {
    dispatch(getPostsByCategoryRequestAction());
    const slug = params.slug.toLowerCase();
    getPostsByCategory(slug)
      .then((res) => {
        dispatch(getPostsByCategoryAction(res.data));
      })
      .catch((err) => {
        dispatch(getPostsByCategoryFailAction(err));
      });
  };
  useEffect(() => {
    handleCategoryPosts();
  }, [params.slug]);
  return (
    <CategoryWrapper className="py-5">
      <Container>
        <Row className="pb-4">
          <Col>
            <Heading>{params.slug}</Heading>
          </Col>
        </Row>
        <Row>
          {loading ? (
            <Loader color="#333" height="400px" align="center" />
          ) : (
            <>
              {posts &&
                posts.map((post) => (
                  <Col sm={12} md={9} key={post.title} className="mb-5">
                    <LatestCard post={post} category={params.slug} />
                  </Col>
                ))}
            </>
          )}
        </Row>
      </Container>
    </CategoryWrapper>
  );
};
