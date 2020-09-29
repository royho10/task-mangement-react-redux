import React from 'react';

const ListsList = ({ lists }) => {
  return (
    <div>
      {
        lists.map((user, i) => {
          return (
            <div>
              <li>{lists[i]}</li>
            </div>
          );
        })
      }
    </div>
  );
}

export default ListsList;