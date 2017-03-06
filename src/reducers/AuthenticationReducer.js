// @flow

import *  from '../actions/actionTypes';

const initialState = {
  username: '',
  password: '',
  token: '',
  isLoggingIn: false,
  isLoggedIn: false,
  error: null
};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return {
        ...state,
        isLoggingIn: true,
        isLoggedIn: false,
        username: action.username,
        password: action.password
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true
        token: action.token
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        error: action.error
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        username: '',
        password: '',
        token: ''
      };
    default:
      return state;
  }
}

export default authentication;
