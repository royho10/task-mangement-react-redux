import { ADD_ANOTHER_LIST_BUTTON_CLICKED } from './constants';

const initialState = {
	isAddAnotherListOn: false
}

export const AddAnotherListButtonClicked = ( state = initialState, action={}) => {
	switch(action.type) {
		case ADD_ANOTHER_LIST_BUTTON_CLICKED:
			console.log('clicked');
			return {...state, isAddAnotherListOn: true};
		default:
			return state	
	};
};

