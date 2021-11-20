import React, { FC } from "react";
import { BsFillPlusSquareFill } from "react-icons/bs";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTask: (e: React.FormEvent) => void;
}

const TodoForm: FC<Props> = ({ todo, setTodo, addTask }) => {
  return (
    <>
      <form
        onSubmit={addTask}
        className="w-10/12 md:w-4/12 flex relative shadow-sm"
      >
        <input
          type="text"
          placeholder="Enter the task name"
          className="h-full w-full border-2 py-3 px-4 pr-14 rounded outline-none"
          value={todo}
          onChange={(e) => {
            if (e.target.value !== " ") {
              setTodo(e.target.value);
            }
          }}
        />

        <button
          type="submit"
          className="text-4xl text-green-500 absolute top-1/2 right-2 transform -translate-y-1/2"
        >
          <BsFillPlusSquareFill />
        </button>
      </form>
    </>
  );
};

export default TodoForm;
