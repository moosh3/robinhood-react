import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';
import SearchLayoutContainer from './components/containers/search-layout-container';

import Home from './components/home';
import VisibleTodoListContainer from './components/containers/VisibleTodoListContainer';
import AddTodoContainer from './components/containers/AddTodo';
import FilterLinkContainer from './components/containers/FilterLink'
import SearchFormContainer from './components/containers/SearchForm';


export default const routes = (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home}>
    </Route>
  </Router>
);
