import { combineReducers } from 'redux';
import { AddAnotherListButtonClicked } from './containers/Main/components/AddAnotherList/reducers';
import { AddNewListName } from './containers/Main/components/NewList/reducers';
import { NewListSubmitButtonClicked } from './containers/Main/components/NewList/reducers';
import { RequestLists } from './containers/Main/components/ListsList/reducers';


const JoinedReducers = combineReducers({
	AddAnotherListButtonClicked, 
	AddNewListName,
	NewListSubmitButtonClicked,
	RequestLists
});

export default JoinedReducers;

