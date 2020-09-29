import { ADD_NEW_LIST_NAME } from './constants';
import { NEW_LIST_SUBMIT_BUTTON_CLICKED } from './constants';

const initialStateNewListName = {
	newListNameField: "",
}

export const AddNewListName = ( state = initialStateNewListName, action={}) => {
	switch(action.type) {
		case ADD_NEW_LIST_NAME:
			return console.log({ state }),
			{...state, newListNameField: action.payload};
		default:
			return state	
	};
};

const initialStateSubmitNewList = {
	isNewNameSubmitOn: false,
	newListName: "",
	lists: []
}

export const NewListSubmitButtonClicked = ( state = initialStateSubmitNewList, action={}) => {
	switch(action.type) {
		case NEW_LIST_SUBMIT_BUTTON_CLICKED:
			return console.log({ state }),
					{...state, 
						isNewNameSubmitOn: true, 
						newListName: action.payload, 
						lists: state.lists.push(action.payload)
					}
		default:
			return state	
	};
};