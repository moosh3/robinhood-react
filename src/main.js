import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';

import Layout from './components/Layout/Layout.js';

const rootElement = document.getElementById('root');

function render(Root) {
  ReactDOM.render(
    <AppContainer>
      <Layout />
    </AppContainer>,
    rootElement
  );
}

render(Root);

// Eliminates the 300ms delay between a physical tap
// and the firing of a click event on mobile browsers
// https://github.com/ftlabs/fastclick
FastClick.attach(document.body);
