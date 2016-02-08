import {combineReducers} from 'redux';
import {routeReducer} from 'react-router-redux';

// import {user} from './user';
// import {tasks} from './tasks';


const rootReducer = combineReducers({
	// user,
	// tasks,
	routing: routeReducer
})

export default rootReducer;