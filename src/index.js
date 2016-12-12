import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import routes from './routes.js';

let store = createStore(todoApp)

ReactDOM.render(
  <Provider store={store}>{routes}</Provider>,
  document.getElementById('root')
);
