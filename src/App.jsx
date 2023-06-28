/* eslint-disable no-unused-vars */
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (input) => {
    const newtodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newtodo]);
  };

  const completeTodo = (id) => {
    const Index = todos.findIndex((t) => t.Id === id);

    const selectedTodo = { ...todos[Index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;

    const updatetodo = [...todos];
    updatetodo[Index] = selectedTodo;

    setTodos(updatetodo);
  };

  const deleteTodo = (id) => {
    const fiterTodo = todos.filter((t) => t.id !== id);
    setTodos(fiterTodo);
  };

  return (
    <>
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList
        Todos={todos}
        oncompleteTodo={completeTodo}
        ondeleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;
