import { PostActionTypes } from "./../actionTypes/postActionTypes";

const initialState = {
  posts: [],
};

export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    
    case PostActionTypes.ADD_POST:
      return {...state, posts: payload};
    
      case PostActionTypes.GET_POSTS:
      return {...state, posts: payload};

    default:
      return state;
  }
};