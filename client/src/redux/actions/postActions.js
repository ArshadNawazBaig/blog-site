import { PostActionTypes } from "./../actionTypes/postActionTypes";

export const addPostAction = (post) => {
  return {
    type: PostActionTypes.ADD_POST,
    payload: post,
  };
};

export const updatePostAction = (post) => {
  return {
    type: PostActionTypes.UPDATE_POST,
    payload: post,
  };
};

export const deleteProductAction = (postId) => {
  return {
    type: PostActionTypes.DELETE_POST,
    payload: postId,
  };
};

export const getPostAction = (postId) => {
  return {
    type: PostActionTypes.GET_POST,
    payload: postId,
  };
};

export const getPostsAction = (posts) => {
  return {
    type: PostActionTypes.GET_POSTS,
    payload: posts
  };
};
