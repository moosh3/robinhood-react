import * as types from '../constants/ActionTypes';
import initialState from './initialState';

const authenticationReducer = (state = initialState.accountData.auth, action) => {
  switch (action.type) {
    case types.LOGIN_ATTEMPT:
      return {
        isLoggingIn: true,
        authed: false,
        username: action.username,
        password: action.password,
        ...state,
      };
    case types.LOGIN_SUCCESS:
      return {
        isLoggingIn: false,
        authed: true,
        authToken: action.authToken,
        ...state,
      };
    case types.LOGIN_FAILURE:
      return {
        authed: false,
        error: action.error,
        ...state,
      };
    case types.LOGOUT:
      return {
        isLoggedIn: false,
        ...state,
      };
    default:
      return state;
  }
};

export default authReducer;
