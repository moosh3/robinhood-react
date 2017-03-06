// @flow

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './components/containers/Layout';
import IndexPage from './components/containers/IndexPage';
import NotFoundPage from './components/containers/NotFoundPage';

const routes = (
  <Route path="/" component={ Layout }>
    <IndexRoute component={ IndexPage }/>
    <Route path="*" component={ NotFoundPage }/>
  </Route>
);

export default routes;
