import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="flex items-center justify-between p-4">
      <div>
        <input
          type="checkbox"
          className="mr-2 form-checkbox h-6 w-6 text-blue-500"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className={todo.completed ? 'line-through text-blue-600' : ' text-black'}>
          {todo.text}
        </span>
      </div>
      <button
        className="font-semibold text-lg text-red-500 hover:text-red-700"
        onClick={() => deleteTodo(todo.id)}
      >
        Eliminar
      </button>
    </li>
  );
};

export default TodoItem;
