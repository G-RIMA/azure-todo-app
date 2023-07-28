import React, { useState } from 'react';

const TodoItem = ({ todo, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setUpdatedText(todo.text);
  };

  const handleSaveEdit = () => {
    editTodo(todo.id, updatedText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
        />
      ) : (
        todo.text
      )}
      {!isEditing && (
        <>
          <button onClick={() => handleEdit()}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
      {isEditing && (
        <>
          <button onClick={() => handleSaveEdit()}>Save</button>    q
          <button onClick={() => handleCancelEdit()}>Cancel</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
