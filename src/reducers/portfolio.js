import * as types from '../constants/ActionTypes';

const portfolioReducer = (state = {}, action) => {
  switch (action.type) {
    case types.REQUEST_PORTFOLIO:
      return {
        isFetching: true,
        lastUpdated: action.receivedAt,
      };
    case types.RECIEVE_PORTFOLIO:
      return {
        isFetching: false,
        lastUpdated: action.receivedAt,
        items: action.positions,
        ...state,
      };
    case types.REQUEST_POSITION_ERROR:
      return {
        ...state,
      }
    default:
      return state;
  }
};

export default portfolioReducer;
