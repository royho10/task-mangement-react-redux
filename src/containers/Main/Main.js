import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Main.css';
import AddAnotherList from './components/AddAnotherList/AddAnotherList';
import NewList from './components/NewList/NewList';
import ListsList from './components/ListsList/ListsList';
import { setNewListTitle } from './components/NewList/actions';
import { AddAnotherListButtonClicked } from './components/AddAnotherList/actions';
import { NewListSubmitButtonClicked } from './components/NewList/actions';

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
		onClickSubmitNewList: (newListName) => dispatch(NewListSubmitButtonClicked(newListName))
	}
}

class Main extends Component {
	render() {
		const { isAddAnotherListOn, newListNameField, onClickAddAnotherList, onChangingNewListName, onClickSubmitNewList, lists } = this.props;
		return(
			<div className="listsList outline">
				<ListsList lists={lists} />
				{	isAddAnotherListOn === true
						? <NewList onChangingNewListName={ onChangingNewListName } onClickSubmitNewList={ () => onClickSubmitNewList(newListNameField) } />
						: <AddAnotherList onClickAddAnotherList={ onClickAddAnotherList } />
				}
			</div>
		)		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);