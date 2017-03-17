import * as types from '../constants/ActionTypes';

const initialState = {
  isLoggedIn: true,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.POST_PLACE_ORDER:
      return {
        ...state,
      };
    case types.PLACE_ORDER_SUCCESS:
      return {
        ...state,
      };
    case types.PLACE_ORDER_FAILURE:
      return {
        ...state,
      };
    case types.POST_BUY_ORDER:
      return {
        ...state,
      };
    case types.BUY_ORDER_SUCCESS:
      return {
        ...state,
      };
    case types.BUY_ORDER_FAILURE:
      return {
        ...state,
      };
    case types.POST_SELL_ORDER:
      return {
        ...state,
      };
    case types.SELL_ORDER_SUCCESS:
      return {
        ...state,
      };
    case types.SELL_ORDER_FAILURE:
      return {
        ...state,
      };
    case types.POST_CANCEL_ORDER:
      return {
        ...state,
      };
    case types.CANCEL_ORDER_SUCCESS:
      return {
        ...state,
      };
    case types.CANCEL_ORDER_FAILURE:
      return {
        ...state,
      };
    case types.GATHER_ORDER_INFO:
      return {
        ...state,
      };
    case types.GATHER_RECENT_ORDERS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default orderReducer;
