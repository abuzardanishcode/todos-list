import React from 'react';
import TodoItem from './TodoItem'; 
const Todos = (props) => {
  return (
    <div className='container'>
      <h2 className=''>Todos List</h2>
      <div>
        {props.TodosApp.length === 0 ? "No Todos Left" :
          props.TodosApp.map((mytodo) => {
            return (
              <div key={mytodo.sno}> {/* Use `mytodo.sno` as the key */}
                <TodoItem todo={mytodo} onDelete={props.DeleteKaro} />
                <hr />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Todos;
