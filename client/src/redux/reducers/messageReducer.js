import { messageActionTypes } from "../actionTypes/messageActionTypes";

const initialState = {};

export const messageReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      
      case messageActionTypes.SET_MESSAGE:
        return {message: payload};
      
        case messageActionTypes.CLEAR_MESSAGE:
        return {message: ''};
  
      default:
        return state;
    }
  };