import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import OrderPage from './containers/OrderPage';
import HistoryPage from './HistoryPage';
import AccountPage from './AccountPage';
import SettingsPage from './SettingsPage';
import LoginPage from './LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import LandingPage from '../components/LandingPage';
import AboutPage from '../components/AboutPage';

export default (
	<Route path="/" component={LandingPage}>
		<IndexRoute component={App} />
		<Route path="/order" component={OrderPage} />
		<Route path="/history" component={HistoryPage} />
		<Route path="/account" component={AccountPage} />
		<Route path="/settings" componet={SettingsPage} />
		<Route path="/login" component={LoginPage} />
		<Route path="/about" component={AboutPage} />
		<Route path="*" component={NotFoundPage} />
	</Route>
);
