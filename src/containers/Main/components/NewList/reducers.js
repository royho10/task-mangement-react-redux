import { ADD_NEW_LIST_NAME } from './constants';
import { NEW_LIST_SUBMIT_BUTTON_CLICKED } from './constants';
import { lists } from '../../lists';
import { listCount } from '../../lists';

const initialStateNewListName = {
	newListNameField: "",
}

export const AddNewListName = ( state = initialStateNewListName, action={}) => {
	switch(action.type) {
		case ADD_NEW_LIST_NAME:
			return {...state, newListNameField: action.payload};
		default:
			return state	
	};
};

const initialStateSubmitNewList = {
	isNewNameSubmitOn: false,
	newListName: "",
	lists: lists,
	listCount: listCount
}

export const NewListSubmitButtonClicked = ( state = initialStateSubmitNewList, action={}) => {
	switch(action.type) {
		case NEW_LIST_SUBMIT_BUTTON_CLICKED:
			return	{...state, 
						isNewNameSubmitOn: true, 
						newListName: action.payload.newListName, 
						lists: state.lists.push({
							listCount: listCount + 1, 
							id: action.payload.newListId,
							title: action.payload.newListName
						})
					};
		default:
			return state	
	};
};