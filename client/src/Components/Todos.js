import React from 'react';
import TodoItem from './TodoItem';
const Todos = ({ todos ,onDelete ,onsave}) => {
  console.log("todos", todos);
  
  if (!todos || todos.length === 0) {
    return <p>No todos available.</p>;
  }

  return (
    <div className='container'>
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} onDelete={onDelete} onSave={onsave}></TodoItem>
      ))}
    </div>
  );
};

export default Todos;