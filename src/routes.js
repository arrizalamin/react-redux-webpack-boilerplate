import React from 'react';

import {
	Router, Route, IndexRoute
} from 'react-router';

// Components

import App from './containers/App';
import About from './components/About';
import Home from './components/Home';

let routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="about" component={About} />
	</Route>
)

export default routes;