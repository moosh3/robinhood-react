import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import Demo from './components/Demo';

const routes = (
  <Route component={App}>
    <Route path='/' component={Demo} />
    // Put other routes here
    // <Route path='*' component={NotFound} />
  </Route>
)

export default routes
