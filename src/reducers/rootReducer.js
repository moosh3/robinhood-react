import { combineReducers } from 'redux';
import authenticationReducer from './authentication';
import quoteReducer from './quote';
import userReducer from './user';
import positionsReducer from './positions';
import orderReducer from './order';
import watchlistReducer from './watchlist';

const accountReducer = combineReducers({
  accountReducer,
  authReducer,
  positionsReducer,
  watchlistReducer,
  orderReducer,
})

const rootReducer = combineReducers({
  quoteReducer,
  accountReducer,
});

export default rootReducer;
