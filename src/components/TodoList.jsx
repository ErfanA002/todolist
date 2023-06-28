/* eslint-disable react/prop-types */
import Todo from "./Todo";

const TodoList = ({ Todos, oncompleteTodo, ondeleteTodo }) => {
  if (Todos === 0) return <p>add some todo</p>;
  return (
    <div className="flex items-center flex-col w-full h-full">
      {Todos.map((t) => {
        return (
          <Todo
            key={t.id}
            todos={t}
            completeTodo={() => oncompleteTodo(t.id)}
            deleteTodo={() => ondeleteTodo(t.id)}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
