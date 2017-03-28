import * as types from '../constants/ActionTypes';

const accountReducer = (state = {}, action) => {
  switch (action.type) {
    case types.REQUEST_ACCOUNT_ID:
      return {
        ...state,
      };
    case types.RECIEVE_ACCOUNT_ID:
      return {
        ...state,
      };
    case types.REQUEST_ACCOUNT_INFO:
      return {
        ...state,
      };
    case types.RECIEVE_ACCOUNT_INFO:
      return {
        ...state,
      };
    default:
      return state,
  }
};

export default accountReducer;
