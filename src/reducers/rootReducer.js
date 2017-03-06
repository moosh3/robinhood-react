// @flow

import {combineReducers} from 'redux';
import authentication from './AuthenticationReducer';

const quoteData = (state = '', action) => {
    switch (action.type) {
        case types.GET_QUOTE:
            return action.quote;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
  // short hand property names
  quoteData,
  authentication,
})

export default rootReducer;
