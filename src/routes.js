import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/containers/App';
import Home from './components/containers/Home';
import LoginPage from './components/containers/LoginPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="/login" component={LoginPage} />
	</Route>
);
