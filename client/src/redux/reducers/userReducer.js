import { userActionTypes } from "../actionTypes/userActionTypes";

const inatialState = {
  users: [],
  loading: false,
  error: "",
  message: "",
};

export const userReducer = (state = inatialState, { type, payload }) => {
  switch (type) {
    case userActionTypes.GET_USERS_REQUEST:
      return { ...state, users: [], loading: true, message: "", error: "" };

    case userActionTypes.DELETE_USER_REQUEST:
      return { ...state, loading: true, message: "", error: "" };

    case userActionTypes.GET_USERS_SUCCESS:
      return { ...state, users: payload, loading: false, error: "" };

    case userActionTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((user) => user._id !== payload),
        loading: false,
        message: "User is successfully deleted!",
        error: "",
      };

    case userActionTypes.GET_USERS_FAIL:
      return {
        ...state,
        users: [],
        loading: false,
        error: payload.message,
        message: "",
      };

    case userActionTypes.DELETE_USER_FAIL:
      return { ...state, loading: false, error: payload.message, message: "" };

    default:
      return state;
  }
};
