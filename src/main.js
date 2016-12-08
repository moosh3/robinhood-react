import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FastClick from 'fastclick';

import Demo from './components/Demo';

const rootElement = document.getElementById('root');
// Remove 300ms tap delay on mobile devices
attachFastClick.attach(document.body)

window.React = React

let render = () => {
  const Root = require(Demo).default
  ReactDOM.render(
    <Root />,
    rootEl
  )
}

render()
