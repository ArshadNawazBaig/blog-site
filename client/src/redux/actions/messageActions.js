import { messageActionTypes } from "./../actionTypes/messageActionTypes";

export const setMessageAction = (message) => {
  return {
    type: messageActionTypes.SET_MESSAGE,
    payload: message,
  };
};

export const clearMessageAction = () => {
  return {
    type: messageActionTypes.CLEAR_MESSAGE,
  };
};
