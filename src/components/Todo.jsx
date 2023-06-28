/* eslint-disable react/prop-types */
const Todo = ({ todos, completeTodo, deleteTodo }) => {
  return (
    <div
      className="flex justify-between m-2 mx-10 bg-white w-full rounded-full shadow-2xl"
      key={todos.id}
    >
      <div className="m-2 p-2">{todos.text}</div>
      <div className="m-1 p-1 flex justify-between w-40">
        <button
          className="p-0.5 outline-green-500 text-green-500 outline outline-offset-2 rounded-3xl"
          type="submit"
          onClick={completeTodo}
        >
          Complete
        </button>
        <button
          className="p-0.5 outline-red-500 text-red-500 outline outline-offset-2 rounded-3xl"
          type="submit"
          onClick={deleteTodo}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
