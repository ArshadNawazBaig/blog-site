import { authActionTypes } from "./../actionTypes/authActionTypes";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };

    case authActionTypes.REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };

    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
      };

    case authActionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    case authActionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };

    default:
      return state;
  }
};
