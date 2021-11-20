import React, { useState, FC } from "react";

import TodoForm from "./components/TodoForm";
import TodoTaskList from "./components/TodoTaskList";
import { Todo } from "./model";

const App: FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className=" bg-gray-50 h-screen w-full flex flex-col items-center">
      <h1 className="text-green-500 border-b-4 border-l-2 border-green-400 rounded-md text-4xl font-bold my-6 p-2">
        Todo App
      </h1>

      <TodoForm todo={todo} setTodo={setTodo} addTask={addTask} />

      <div className="mt-10 mb-6 w-full flex flex-col items-center">
        <TodoTaskList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default App;
