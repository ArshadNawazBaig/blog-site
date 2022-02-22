import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPost } from "../../network/api/post";
import { getPostAction } from "../../redux/actions/postActions";
import { PostWrapper, Title, UserDetails, PostedText, SocialShare, SocialBtn, PostBody, PostDesc } from "./style";

export const Post = () => {
  const params = useParams();
  const post = useSelector((state) => state.allPosts.selectedPost);
  const dispatch = useDispatch();
  useEffect(() => {
    getPost(params.postId)
      .then((res) => {
        dispatch(getPostAction(res.data));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <PostWrapper>
      <Title>{post.title}</Title>
      <UserDetails>
        <PostedText>Posted by</PostedText>
        <img src="" />
        <PostedText>{post.username} on March 06, 2021</PostedText>
        <SocialShare>
          <SocialBtn>Facebook</SocialBtn>
          <SocialBtn>Twitter</SocialBtn>
        </SocialShare>
      </UserDetails>
      <PostBody>
        <PostDesc>{post.des}</PostDesc>
        <img src={post.picture} />
      </PostBody>
    </PostWrapper>
  );
};
