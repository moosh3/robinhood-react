/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';
import routes from './routes';
import App from './components/containers/App';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

render(
  <AppContainer>
    <Root store={store} history={history} /> // AppComponent
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./components/containers/Root', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./components/containers/Root').default
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
