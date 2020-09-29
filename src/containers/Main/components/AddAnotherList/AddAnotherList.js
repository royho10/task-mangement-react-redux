import React from 'react';
import './AddAnotherList.css';

const AddAnotherList = ({ onClickAddAnotherList }) => {
	return (
		<div className="listsList outline">
			<div className="list outline ma3">
				<button onClick={onClickAddAnotherList} type="button"className="outline ma2 ph2">+ Add another list</button>
			</div>
		</div>
	)
}

export default AddAnotherList; 