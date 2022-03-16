import { deleteUser, getUsers } from "../../network/api/user";
import { userActionTypes } from "../actionTypes/userActionTypes";

export const getUsersAction = () => {
  return async (dispatch) => {
    dispatch({
      type: userActionTypes.GET_USERS_REQUEST,
    });
    try {
      const res = await getUsers();
      dispatch({
        type: userActionTypes.GET_USERS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: userActionTypes.GET_USERS_FAIL, payload: error });
    }
  };
};

export const deleteUserAction = (id) => {
  return async (dispatch) => {
    dispatch({
      type: userActionTypes.DELETE_USER_REQUEST,
    });
    try {
      const res = await deleteUser(id);
      if (res) {
        dispatch({
          type: userActionTypes.DELETE_USER_SUCCESS,
          payload: id,
        });
      }
    } catch (error) {
      dispatch({
        type: userActionTypes.DELETE_USER_FAIL,
        payload: error,
      });
    }
  };
};
