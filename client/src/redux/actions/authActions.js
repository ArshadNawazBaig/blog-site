import { login, register } from "../../network/api/auth";
import { authActionTypes } from "../actionTypes/authActionTypes";

export const registerRequestAction = () => {
  return {
    type: authActionTypes.REGISTER_REQUEST,
  };
};

export const loginRequestAction = () => {
  return {
    type: authActionTypes.LOGIN_REQUEST,
  };
};

export const registerSuccessAction = (user) => {
  return {
    type: authActionTypes.REGISTER_SUCCESS,
    payload: user,
  };
};

export const loginSuccessAction = (user) => {
  return {
    type: authActionTypes.LOGIN_SUCCESS,
    payload: user,
  };
};

export const registerFailAction = (error) => {
  return {
    type: authActionTypes.REGISTER_FAIL,
    payload: error.message
  }
}

export const loginFailAction = (error) => {
  return {
    type: authActionTypes.LOGIN_FAIL,
    payload: error
  }
}

export const logoutAction = () => {
  return {
    type: authActionTypes.LOGOUT,
  };
};

export const loginAction = (user) => {
  return async (dispatch) => {
    dispatch(loginRequestAction());
    try {
      const res = await login(user)
      localStorage.setItem("user", JSON.stringify(res.data));
      dispatch(loginSuccessAction(res.data));
    } catch (error) {
      dispatch(loginFailAction(error.message))
    }
  }
};

export const registerAction = (user) => {
  return async (dispatch) => {
    dispatch(registerRequestAction());
    try {
      const res = await register(user);
      dispatch(registerSuccessAction(res.data))
    } catch (error) {
      dispatch(registerFailAction(error.message));
    }
  }
};