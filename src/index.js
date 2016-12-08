import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import FastClick from 'fastclick';

import Demo from './components/Demo.js';

const rootElement = document.getElementById('root');

function render(Root) {
  ReactDOM.render(
    <AppContainer>
      <Root />
    </AppContainer>,
    rootElement
  );
}

render(Demo);
