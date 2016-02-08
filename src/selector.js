import { createSelector } from 'reselect';

const userSelector = state => state.user;
const taskSelector = state => state.tasks;

export const selector = createSelector(
	userSelector,
	taskSelector,
	(user, tasks)=>{
		return {
			user, 
			tasks
		}
	}
)