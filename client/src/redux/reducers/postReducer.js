import { PostActionTypes } from "./../actionTypes/postActionTypes";

const postsInitialState = {
  posts: [],
  loading: false,
  error: "",
};

const selectedPostInitialState = {
  selectedPost: {},
  loading: false,
  error: "",
};

const categoryPostsInitialState = {
  posts: [],
  loading: false,
  error: "",
};

export const postReducer = (state = postsInitialState, { type, payload }) => {
  switch (type) {
    case PostActionTypes.ADD_POST_REQUEST:
    case PostActionTypes.GET_POSTS_REQUEST:
      return { ...state, loading: true, error: "" };

    case PostActionTypes.ADD_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [payload, ...state.posts],
        error: "",
      };

    case PostActionTypes.GET_POSTS_SUCCESS:
      return { ...state, loading: false, posts: payload, error: "" };

    case PostActionTypes.ADD_POST_FAIL:
    case PostActionTypes.GET_POSTS_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export const selectedPostReducer = (
  state = selectedPostInitialState,
  { type, payload }
) => {
  switch (type) {
    case PostActionTypes.GET_POST_REQUEST:
      return { ...state, loading: true, error: "" };

    case PostActionTypes.GET_POST_SUCCESS:
      return { ...state, loading: false, selectedPost: payload, error: "" };

    case PostActionTypes.GET_POST_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export const categoryPostsReducer = (
  state = categoryPostsInitialState,
  { type, payload }
) => {
  switch (type) {
    case PostActionTypes.GET_POSTS_BY_CATEGORY_REQUEST:
      return { ...state, posts: [], loading: true, error: "" };

    case PostActionTypes.GET_POSTS_BY_CATEGORY_SUCCESS:
      return { ...state, loading: false, posts: payload, error: "" };

    case PostActionTypes.GET_POSTS_BY_CATEGORY_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
