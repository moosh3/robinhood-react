import * from '../constants/ActionTypes';

const initialState = {
  
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
