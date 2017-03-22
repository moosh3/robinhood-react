import { createStore, applyMiddleware } from 'redux';
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { loadState, saveState } from './localStorage';

const configureStore = (initialState) => {
  const persistedState = loadState();
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
  );

  store.subscribe(throttle(() => {
    saveState({
      account: store.getState().account,
    })
  }, 1000))

  return store;
}

// By exporting configureStore instead of just store, we will
// be able to create as many store instances as we want for testing.
export default configureStore;
