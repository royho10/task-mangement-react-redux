import { ADD_NEW_LIST_NAME } from './constants';
import { NEW_LIST_SUBMIT_BUTTON_CLICKED } from './constants';

export const setNewListTitle = (text) => ({
	type: ADD_NEW_LIST_NAME,
	payload: text
});

export const NewListSubmitButtonClicked = (newListName, id) => ({
	type: NEW_LIST_SUBMIT_BUTTON_CLICKED,
	payload: {
				newListName: newListName, 
				newListId: id
			}
});