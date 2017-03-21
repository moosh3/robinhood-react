import * as types from '../constants/ActionTypes';
import initialState from './initialState';

const positionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INVALIDATE_POSITIONS:
      return {
        didInvalidate: true,
        ...state,
      };
    case types.REQUEST_POSITIONS:
      return {
        isFetching: true,
        didInvalidate: false,
      };
    case types.RECEIVE_POSITIONS:
      return {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: action.receivedAt,
        items: action.positions,
        ...state,
      };
    default:
      return state;
  }
};

export default positionsReducer;
