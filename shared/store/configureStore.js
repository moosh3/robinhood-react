import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export default function configureStore() {
  const store = createStore(
      rootReducer,
      applyMiddleware(thunk)
    );

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('../reducers', () => {
        const nextRootReducer = require('../reducers').default
        store.replaceReducer(nextRootReducer)
      });
    }

    return store
}
