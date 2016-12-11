import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/Search';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <App items={ libraries } />,
  rootEl
);
