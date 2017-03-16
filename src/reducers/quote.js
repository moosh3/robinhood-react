import * as types from '../constants/ActionTypes';
import initialState from './initialState';


const quoteReducer = (state = initialState.quoteData, action) => {
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
      }
    case types.RECIEVE_QUOTE:
      return {
        isFetching: false,
        items: action.fetchQuote,
        ...state,
      }
    default:
      return state;
  }
}

export default quoteReducer;
