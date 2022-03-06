import { addPost, deletePost, getPost, getPosts, getPostsByCategory, updatePost } from "../../network/api/post";
import { PostActionTypes } from "./../actionTypes/postActionTypes";

export const addPostRequestAction = () => {
  return {
    type: PostActionTypes.ADD_POST_REQUEST
  }
}

export const addPostSuccessAction = (post) => {
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

export const updatePostSuccessAction = (post) => {
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

export const deletePostRequestAction = () => {
  return {
    type: PostActionTypes.DELETE_POST_REQUEST
  };
};

export const deletePostSuccessAction = (postId) => {
  return {
    type: PostActionTypes.DELETE_POST_SUCCESS,
    payload: postId,
  };
};

export const deletePostFailAction = (error) => {
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

export const getPostSuccessAction = (post) => {
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

export const getPostsSuccessAction = (posts) => {
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

export const getPostsByCategoryRequestAction = () => {
  return {
    type: PostActionTypes.GET_POSTS_BY_CATEGORY_REQUEST
  };
};

export const getPostsByCategorySuccessAction = (posts) => {
  return {
    type: PostActionTypes.GET_POSTS_BY_CATEGORY_SUCCESS,
    payload: posts
  };
};

export const getPostsByCategoryFailAction = (error) => {
  return {
    type: PostActionTypes.GET_POSTS_BY_CATEGORY_FAIL,
    payload: error.message
  };
};

// Add post action
export const addPostAction = (post) => {
  return async (dispatch) => {
    dispatch(addPostRequestAction());
    try {
      const res = await addPost(post);
      dispatch(addPostSuccessAction(res.data));
    } catch (error) {
      dispatch(addPostFailAction(error));
    }
  }
} 

// Get post action
export const getPostAction = (postId) => {
  return async (dispatch) => {
    dispatch(getPostRequestAction());
    try {
      const res = await getPost(postId);
      dispatch(getPostSuccessAction(res.data))
    } catch (error) {
      dispatch(getPostFailAction(error))
    }
  }
}

// Update post action
export const updatePostAction = (postId, post) => {
  return async (dispatch) => {
    dispatch(updatePostRequestAction());
    try {
      const res = await updatePost(postId, post);
      dispatch(updatePostSuccessAction(res.data))
    } catch (error) {
      dispatch(updatePostFailAction(error))
    }
  }
}

// Delete post action
export const deletePostAction = (postId) => {
  return async (dispatch) => {
    dispatch(deletePostRequestAction());
    try {
      const res = await deletePost(postId);
      dispatch(deletePostSuccessAction(res.data))
    } catch (error) {
      dispatch(deletePostFailAction(error))
    }
  }
}

// Get posts action
export const getPostsAction = () => {
  return async (dispatch) => {
    dispatch(getPostsRequestAction());
    try {
      const res = await getPosts();
      dispatch(getPostsSuccessAction(res.data));
    } catch (error) {
      dispatch(getPostsFailAction(error))
    }
  }
};

// get posts by category action
export const getPostsByCategoryAction = (slug) => {
  return async (dispatch) => {
    dispatch(getPostsByCategoryRequestAction());
    try {
      const res = await getPostsByCategory(slug);
      dispatch(getPostsByCategorySuccessAction(res.data));
    } catch (error) {
      dispatch(getPostsByCategoryFailAction(error));
    }
  }
}