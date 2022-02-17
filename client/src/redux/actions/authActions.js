import { authActionTypes } from "../actionTypes/authActionTypes";

export const registerAction = (user) => {
  return {
    type: authActionTypes.REGISTER_SUCCESS,
    payload: user,
  };
};

export const loginAction = (user) => {
  return {
    type: authActionTypes.LOGIN_SUCCESS,
    payload: user,
  };
};

export const logoutAction = () => {
  return {
    type: authActionTypes.LOGOUT,
  };
};
