import * as types from '../constants/ActionTypes';
import initialState from './initialState';

const authenticationReducer = (state = initialState.accountData.auth, action) => {
  switch (action.type) {
    case types.LOGIN_ATTEMPT:
      return {
        ...state,
        isLoggingIn: true,
        isLoggedIn: false,
        username: action.username,
        password: action.password,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        authToken: action.authToken,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        error: action.error,
      };
    case types.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        username: '',
        password: '',
        authToken: '',
      };
    default:
      return state;
  }
};

export default authenticationReducer;
