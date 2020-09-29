import { REQUEST_TASKS } from './constants';

export const requestTasks = () => ({
	type: REQUEST_TASKS,
	payload: newListName
});