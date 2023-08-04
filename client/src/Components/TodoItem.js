import React, { useState } from "react";

const TodoItem = ({ todo, onDelete, onSave }) => {
  const [editMode, setEditMode] = useState(false);
  const [editMessage, setEditMessage] = useState(todo.message);

  const handleDeleteItem = () => {
    onDelete(todo.id);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleInputChange = (e) => {
    setEditMessage(e.target.value);
  };

  const handleSave = () => {
    onSave(todo.id, editMessage);
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMessage(todo.message);
    setEditMode(false);
  };

  return (
    <div>
      {editMode ? (
        <div>
          <input type="text" value={editMessage} onChange={handleInputChange} />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <h1>{editMessage}</h1>
          <p>{todo.id}</p>
          <button onClick={handleDeleteItem}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;