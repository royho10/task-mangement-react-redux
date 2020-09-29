import { REQUEST_LISTS } from './constants';

const initialStateLists = {
	lists: ["homework"]
}

export const RequestLists = (state=initialStateLists, action={}) => {
	switch (action.type) {
		case REQUEST_LISTS:
			return {...state}
		default:
			return state
	}
}