import * as types from '../constants/ActionTypes';

const initialState = {
  isLoggedIn: true,
};

const watchlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE_WATCHLIST:
      return {
        ...state,
      };
    case types.GET_WATCHLISTS:
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
