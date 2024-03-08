import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo.trim());
      setNewTodo('');
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="w-64 p-2 border border-gray-300 text-black"
        placeholder="Agregar nueva tarea"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        onClick={handleAddTodo}
      >
        Agregar
      </button>
    </div>
  );
};

export default AddTodo;