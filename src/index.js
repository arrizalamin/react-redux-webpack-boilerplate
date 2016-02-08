import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import routes from './routes';

let store;
// if rendered server side
if(window.__INITIAL_STATE__ != "{initial_state}") store = configureStore(window.__INITIAL_STATE__);
// if not
else store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			{routes}
		</Router>
	</Provider>,
document.getElementById('root'));
