import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import quoteReducer from './quote';
import userReducer from './user';
import positionsReducer from './positions';
import orderReducer from './order';

const rootReducer = combineReducers({
  quoteReducer,
  authenticationReducer,
  userReducer,
  positionsReducer,
  orderReducer,
});

export default rootReducer;
