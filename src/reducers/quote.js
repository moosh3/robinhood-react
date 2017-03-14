import * as types from '../constants/ActionTypes';

const initialState = {
  isLoggedIn: true,
  response: {
    ask_price: '',
    ask_size: '',
    bid_price: '',
    last_trade_price: '',
    last_extended_hours_trade_price: null,
    previous_close: '',
    adjusted_previous_close: '',
    previous_close_date: '',
    symbol: '',
    trading_halted: '',
    updated_at: '',
  }
}

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUOTE_DATA:
      return {
        ...state,
      };
    case QUOTE_DATA_SUCCESS:
      return {
        ...state,
      }
    case QUOTE_DATA_FAILURE:
      return {
        ...state,
      }
    default:
      return state;
  }
}

export default quoteReducer;
