import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const TodoListComponent = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
    };
  
    const toggleTodo = (id) => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };
  
    const deleteTodo = (id) => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };
  return (
    <div>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  )
}

export default TodoListComponent