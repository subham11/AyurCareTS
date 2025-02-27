// src/store/reducers/authReducer.ts
import { AnyAction } from 'redux';

export interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
};

const authReducer = (state = initialState, action: AnyAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { isLoggedIn: true };
    case 'LOGOUT':
      return { isLoggedIn: false };
    default:
      return state;
  }
};

export default authReducer;
