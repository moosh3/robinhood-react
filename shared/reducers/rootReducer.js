import { combineReducers } from 'redux';
import authentication from './AuthenticationReducer';

const rootReducer = combineReducers({
  // short hand property names
  quoteReducer,
  authenticationReducer,
});

export default rootReducer;
