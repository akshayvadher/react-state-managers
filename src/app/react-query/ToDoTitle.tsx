import React from "react";
import { ToDoDto } from "@/app/react-query/todo.dto";

const ToDoTitle = ({ todo }: { todo: ToDoDto }) => {
  return (
    <>
      {todo.title}
      {!todo.id ? <small className="slate-200">Updating</small> : null}
    </>
  );
};

export default ToDoTitle;
