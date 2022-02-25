import { PostActionTypes } from "./../actionTypes/postActionTypes";

export const addPostRequestAction = () => {
  return {
    type: PostActionTypes.ADD_POST_REQUEST
  }
}

export const addPostAction = (post) => {
  return {
    type: PostActionTypes.ADD_POST_SUCCESS,
    payload: post,
  };
};

export const addPostFailAction = (error) => {
  return {
    type: PostActionTypes.ADD_POST_FAIL,
    payload: error.message,
  };
};

export const updatePostRequestAction = () => {
  return {
    type: PostActionTypes.UPDATE_POST_REQUEST
  };
};

export const updatePostAction = (post) => {
  return {
    type: PostActionTypes.UPDATE_POST_SUCCESS,
    payload: post,
  };
};

export const updatePostFailAction = (error) => {
  return {
    type: PostActionTypes.UPDATE_POST_FAIL,
    payload: error.message,
  };
};

export const deleteProductRequestAction = () => {
  return {
    type: PostActionTypes.DELETE_POST_REQUEST
  };
};

export const deleteProductAction = (postId) => {
  return {
    type: PostActionTypes.DELETE_POST_SUCCESS,
    payload: postId,
  };
};

export const deleteProductFailAction = (error) => {
  return {
    type: PostActionTypes.DELETE_POST_FAIL,
    payload: error.message,
  };
};

export const getPostRequestAction = () => {
  return {
    type: PostActionTypes.GET_POST_REQUEST
  };
};

export const getPostAction = (post) => {
  return {
    type: PostActionTypes.GET_POST_SUCCESS,
    payload: post,
  };
};

export const getPostFailAction = (error) => {
  return {
    type: PostActionTypes.GET_POST_FAIL,
    payload: error.message,
  };
};

export const getPostsRequestAction = () => {
  return {
    type: PostActionTypes.GET_POSTS_REQUEST
  };
};

export const getPostsAction = (posts) => {
  return {
    type: PostActionTypes.GET_POSTS_SUCCESS,
    payload: posts
  };
};

export const getPostsFailAction = (error) => {
  return {
    type: PostActionTypes.GET_POSTS_FAIL,
    payload: error.message
  };
};
