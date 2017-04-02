import * as types from '../constants/ActionTypes';

const accountReducer = (state = {}, action) => {
  switch (action.type) {
    case types.REQUEST_ACCOUNT_ID:
      return {
        isFetching: true,
        ...state,
      };
    case types.RECIEVE_ACCOUNT_ID:
      return {
        isFetching: false,
        accountId: action.accountId,
        ...state,
      };
    case types.REQUEST_ACCOUNT_INFO:
      return {
        isFetching: true,
        ...state,
      };
    case types.RECIEVE_ACCOUNT_INFO:
      return {
        isFetching: false,
        accountInfo: action.accountInfo,
        ...state,
      };
    default:
      return state,
  }
};

export default accountReducer;
