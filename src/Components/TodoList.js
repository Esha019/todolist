import React from 'react';
import TodoForm from './TodoForm';
import { useState } from "react";

const TodoList = () => {
const [todos, setTodos] = useState([]);

const addTodo = todo => {
  if(!todo.text || /^\s*$/.test(todo.text)){
    return;
  }

  const newTodos = [todo, ...todos];
console.log(newTodos);
  setTodos(newTodos);
}
	return (
		<div>
			<h1>Whats the plan for Today ?</h1>
			<TodoForm onSubmit={addTodo}/>
		</div>
	)
}

export default TodoList