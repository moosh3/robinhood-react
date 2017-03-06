// @flow

import { combineReducers } from 'redux';
import authentication from './AuthenticationReducer';

const quoteData = (state = '', action) => {
    switch (action.type) {
      case type.QUOTE_ATTEMPT:
          return action.quoteAttempt;
      case type.QUOTE_FAILURE:
          return action.quoteFailure;
      case type.QUOTE_SUCCESS:
          return action.quoteSuccess;
      default:
          return state;
    }
};

const rootReducer = combineReducers({
  // short hand property names
  quoteData,
  authentication,
});

export default rootReducer;
