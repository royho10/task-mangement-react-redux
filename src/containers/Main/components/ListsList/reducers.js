import { REQUEST_LISTS } from './constants';
/*import { lists } from '../../lists';*/

const initialStateLists = {
  lists: [],
}

export const RequestLists = (state=initialStateLists, action={}) => {
	switch (action.type) {
		case REQUEST_LISTS:
			console.log("request lists");
			return {...state, lists: action.payload}
		default:
			return state
	}
}