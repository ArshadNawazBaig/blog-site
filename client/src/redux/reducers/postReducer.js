import { PostActionTypes } from "./../actionTypes/postActionTypes";

const initialState = {
  posts: [],
  selectedPost: {},
  loading: false,
  error: "",
};

export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PostActionTypes.ADD_POST_REQUEST:
    case PostActionTypes.GET_POSTS_REQUEST:
    case PostActionTypes.GET_POST_REQUEST:
      return { ...state, loading: true, error: "" };

    case PostActionTypes.ADD_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [payload, ...state.posts],
        error: "",
      };

    case PostActionTypes.GET_POSTS_SUCCESS:
      return {...state, loading: false, posts: payload, error: ''}

    case PostActionTypes.GET_POST_SUCCESS:
      return {...state, loading: false, selectedPost: payload, error: ''}

    case PostActionTypes.ADD_POST_FAIL:
    case PostActionTypes.GET_POSTS_FAIL:
    case PostActionTypes.GET_POST_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
