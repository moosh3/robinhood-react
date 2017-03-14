import * from '../constants/ActionTypes';

const initialState = {
  isLoggedIn: true,
}

const watchlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_WATCHLIST:
      return {
        ...state,
      };
    case GET_WATCHLISTS:
      return {
        ...state,
      };
    case ADD_INSTRUMENT_TO_WATCHLIST:
      return {
        ...state,
      };
    case DELETE_WATCHLIST_INSTRUMENT:
      return {
        ...state
      };
    default:
      return state;
  }
}

export default watchlistReducer;
