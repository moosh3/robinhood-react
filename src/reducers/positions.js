import * as types from '../constants/ActionTypes';

const positionsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.REQUEST_POSITIONS:
      return {
        isFetching: true,
        lastUpdated: action.receivedAt,
      };
    case types.RECEIVE_POSITIONS:
      return {
        isFetching: false,
        lastUpdated: action.receivedAt,
        items: action.positions,
        ...state,
      };
    default:
      return state;
  }
};

export default positionsReducer;
