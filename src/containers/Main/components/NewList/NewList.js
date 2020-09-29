import React from 'react';
import { connect } from 'react-redux';
import './NewList.css';

const mapStateToProps = state => ({
	newListNameField: state.AddNewListName.newListNameField
});

const NewList = ({ onChangingNewListName, onClickSubmitNewList, newListNameField }) => {
	return (
		<div className="listsList flex">
				<div className="ma3">
					<div className='w-100 outline flex-wrap'>
						<input
							className='ma1 pa2'
							type='text'
							placeholder='Enter list title'
							onChange={ onChangingNewListName }
						/>
					</div>
					<div className='w-40 outline'>	
						<button
							className='mv1 pa2 ba bg-green'
							type='submit'
							onClick={onClickSubmitNewList}
							>Submit
						</button>
					</div>
					<div className='pv1 w-20 outline'>
						<button>X</button>
					</div>		
				</div>
		</div>
	)
}

export default connect(mapStateToProps)(NewList);