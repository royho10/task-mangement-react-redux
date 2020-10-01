import { REQUEST_LISTS } from './constants';
import { lists } from '../../lists';

export const requestLists = () => ({
	type: REQUEST_LISTS,
	payload: lists
});