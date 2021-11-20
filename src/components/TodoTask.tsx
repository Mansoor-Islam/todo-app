import React, { FC, useEffect, useRef, useState } from "react";
import { Todo } from "../model";

import { FiEdit } from "react-icons/fi";
import { MdDelete, MdOutlineDone } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoTask: FC<Props> = ({ todo, todos, setTodos }) => {
  const [editModeStatus, setEditModeStatus] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEditModeStatus(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [editModeStatus]);

  return (
    <form
      onSubmit={(e) => handleEdit(e, todo.id)}
      className="bg-white border-2 border-t-4 border-green-500 flex items-center justify-between 
      h-14 w-10/12 md:w-4/12 pl-2 md:pl-6 md:pr-1 mb-2 rounded shadow-md "
    >
      {editModeStatus ? (
        <div className="relative border-2 w-11/12">
          <input
            value={editTodo}
            ref={inputRef}
            onChange={(e) => {
              setEditTodo(e.target.value);
            }}
            className="h-8 w-full md:w-80  px-2 border-green-500 outline-none"
          />

          <button
            className="absolute top-1/2 right-3 transform -translate-y-1/2"
            type="submit"
          >
            <GrUpdate />
          </button>
        </div>
      ) : todo.isDone ? (
        <s className="w-72">{todo.todo}</s>
      ) : (
        <span className="w-72">{todo.todo}</span>
      )}

      <div className="flex items-center justify-evenly text-lg h-full w-36 md:w-32">
        <span
          className="bg-yellow-400 text-gray-50 p-0.5 md:px-2 md:py-2 rounded-sm cursor-pointer"
          onClick={() => {
            if (!editModeStatus && !todo.isDone) {
              setEditModeStatus(!editModeStatus);
            }
          }}
        >
          <FiEdit />
        </span>

        <span
          className="bg-red-500 text-gray-50 p-0.5 md:px-2 md:py-2 rounded-sm cursor-pointer"
          onClick={() => handleDelete(todo.id)}
        >
          <MdDelete />
        </span>

        <span
          className="bg-green-500 text-gray-50 p-0.5 md:px-2 md:py-2 rounded-sm cursor-pointer"
          onClick={() => handleDone(todo.id)}
        >
          <MdOutlineDone />
        </span>
      </div>
    </form>
  );
};

export default TodoTask;
