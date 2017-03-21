import * as types from '../constants/ActionTypes';

const watchlistReducer = (state = {}, action) => {
  switch (action.type) {
    case types.INVALIDATE_WATCHLISTS:
      return {
        invalidated: true,
        ...state,
      }
    case types.REQUEST_WATCHLIST:
      return {
        isFetching: true,
        ...state,
      };
    case types.RECEIVE_WATCHLIST:
      return {
        isFetching: false,
        items: action.watchlist,
        lastUpdated: action.receivedAt, 
      }
    case types.CREATE_WATCHLIST:
      return {
        ...state,
      };
    case types.ADD_INSTRUMENT_TO_WATCHLIST:
      return {
        ...state,
      };
    case types.DELETE_WATCHLIST_INSTRUMENT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default watchlistReducer;
