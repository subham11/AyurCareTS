// src/store/actions/authActions.ts
import { Dispatch } from 'redux';

export const login = (username: string, password: string) => (dispatch: Dispatch) => {
  // In a real application, perform API authentication here.
  // For now, we immediately dispatch a login success.
  dispatch({ type: 'LOGIN_SUCCESS' });
};

export const logout = () => (dispatch: Dispatch) => {
  dispatch({ type: 'LOGOUT' });
};
