import { authActionTypes } from "./../actionTypes/authActionTypes";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: user ? user : null,
  isLoggedIn: user ? true : false,
  loading: false,
  error: "",
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authActionTypes.REGISTER_REQUEST:
    case authActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      };

    case authActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        user: null
      };

    case authActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload,
        loading: false
      };

    case authActionTypes.REGISTER_FAIL:
    case authActionTypes.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        error: payload,
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
