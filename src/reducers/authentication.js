import * as types from '../constants/ActionTypes';

const authenticationReducer = (state = {}, action) => {
  switch (action.type) {
    case types.REQUEST_AUTH:
      return {
        isLoggingIn: true,
        authed: false,
        ...state,
      };
    case types.RECIEVE_AUTH:
      return {
        isLoggingIn: false,
        authed: true,
        authToken: action.authToken,
        ...state,
      };
    case types.RECIEVE_AUTH_TOKEN:
      return {
        authed: true,
        error: action.error,
        authToken: action.authToken,
        ...state,
      };
    case types.AUTH_FAILURE:
      return {
        authed: false,
        error: true,
        ...state,
      };
    default:
      return state;
  }
};

export default authReducer;
