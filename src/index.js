/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import App from './components/containers/app'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
);
