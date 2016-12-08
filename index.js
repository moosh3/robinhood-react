import React, { Component } from 'react';
import { render } from "react-dom";
import FastClick from 'fastclick';

import App from './components/App';

const rootEl = document.getElementById('root');
// Remove 300ms tap delay on mobile devices
attachFastClick.attach(document.body)

render(
  <App />,
  containerEl
);
