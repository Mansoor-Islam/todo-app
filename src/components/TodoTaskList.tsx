import React, { FC } from "react";

import { Todo } from "../model";
import TodoTask from "./TodoTask";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoTaskList: FC<Props> = ({ todos, setTodos }) => {
  return (
    <>
      {todos.map((todo, index) => {
        return (
          <TodoTask todo={todo} key={index} todos={todos} setTodos={setTodos} />
        );
      })}
    </>
  );
};

export default TodoTaskList;
