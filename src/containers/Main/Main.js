import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Main.css';
import AddAnotherList from './components/AddAnotherList/AddAnotherList';
import NewList from './components/NewList/NewList';
import ListsList from './components/ListsList/ListsList';
/*import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';*/
import { setNewListTitle } from './components/NewList/actions';
import { AddAnotherListButtonClicked } from './components/AddAnotherList/actions';
import { NewListSubmitButtonClicked } from './components/NewList/actions';
import { requestLists } from './components/ListsList/actions';
import { v4 as uuidv4 } from 'uuid';

const mapStateToProps = (state) => {
	return {
		isAddAnotherListOn: state.AddAnotherListButtonClicked.isAddAnotherListOn,
		newListNameField: state.AddNewListName.newListNameField,
		lists: state.RequestLists.lists
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClickAddAnotherList: () => dispatch(AddAnotherListButtonClicked()),
		onChangingNewListName: (event) => dispatch(setNewListTitle(event.target.value)),
		onClickSubmitNewList: (newListName, id) => dispatch(NewListSubmitButtonClicked(newListName, id)),
		requestLists: () => dispatch(requestLists())
	}
}

class Main extends Component {
	componentDidMount() {
		console.log("did mount");
    	this.props.requestLists();
  	}
	render() {
		const { isAddAnotherListOn, newListNameField, onClickAddAnotherList, onChangingNewListName, onClickSubmitNewList, lists } = this.props;
		console.log("rendering", lists);
		return(
			<div className="listsList outline">
				{/*<ErrorBoundary>*/}
					<ListsList lists={lists}/>
				{/*</ErrorBoundary>*/}
				{	isAddAnotherListOn === true
						? <NewList 
							onChangingNewListName={ onChangingNewListName } 
							onClickSubmitNewList={ () => onClickSubmitNewList(newListNameField, uuidv4()) } />
						: <AddAnotherList onClickAddAnotherList={ onClickAddAnotherList } />
				}
			</div>
		)		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);