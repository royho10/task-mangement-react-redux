import React from 'react';

const ListsList = (lists) => {
  console.log("lists" , lists);
  return (
      <ul>
        {
          lists.lists.map((list) => {
            return (
              <div>
                <li className="f3" key={list.id}>{list.title}</li>
                { 
                  list.tasks.map((task) => {
                    return (
                      <li key={task.id}>{task.title}</li>
                    )
                  })
                }
              </div>
            );
          })
        }
      </ul>
  );
}

export default ListsList;