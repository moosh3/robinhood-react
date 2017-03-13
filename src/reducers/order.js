import * from '../constants/ActionTypes';

const initialState = {
  isLoggedIn: false,
  order: {
    account: '',
    instrument: '',
    symbol: '',
    type: '',
    time_in_force: '',
    trigger: '',
    price: '',
    stop_price: '',
    quantity: '',
    side: '',
    client_id: '',
  },
}

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_PLACE_ORDER:
      return {
        ...state,
      };
    case PLACE_ORDER_SUCCESS:
      return {
        ...state,
      };
    case PLACE_ORDER_FAILURE:
      return {
        ...state,
      };
    case POST_BUY_ORDER:
      return {
        ...state,
      };
    case BUY_ORDER_SUCCESS:
      return {
        ...state,
      };
    case BUY_ORDER_FAILURE:
      return {
        ...state,
      };
    case POST_SELL_ORDER:
      return {
        ...state,
      };
    case SELL_ORDER_SUCCESS:
      return {
        ...state,
      };
    case SELL_ORDER_FAILURE:
      return {
        ...state,
      };
    case POST_CANCEL_ORDER:
      return {
        ...state,
      };
    case CANCEL_ORDER_SUCCESS:
      return {
        ...state,
      };
    case CANCEL_ORDER_FAILURE:
      return {
        ...state,
      };
    case GATHER_ORDER_INFO:
      return {
        ...state,
      };
    case GATHER_RECENT_ORDERS:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default orderReducer;
