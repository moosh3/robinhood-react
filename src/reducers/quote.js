import * as types from '../constants/ActionTypes';

const quoteReducer = (state = {}, action) => {
  switch (action.type) {
    case types.REQUEST_QUOTE:
      return {
        isFetching: true,
        ...state,
      };
    case types.REQUEST_QUOTE_ERROR:
      return {
        error: true,
        ...state,
      };
    case types.RECIEVE_QUOTE:
      return {
        isFetching: false,
        quote: action.data,
        lastUpdated: action.receivedAt,
        ...state,
      };
    default:
      return state;
  }
};

export default quoteReducer;
