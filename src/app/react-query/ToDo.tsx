import React from "react";
import { ToDoDto } from "@/app/react-query/todo.dto";
import Container from "@/app/(components)/Container";
import ToDoDelete from "@/app/react-query/ToDoDelete";
import ToDoToggle from "@/app/react-query/ToDoToggle";

const ToDot = ({ todo }: { todo: ToDoDto }) => {
  return (
    <Container>
      <div className="flex gap-2">
        <ToDoToggle todo={todo} />
        {todo.title}
        <ToDoDelete todo={todo} />
      </div>
    </Container>
  );
};

export default ToDot;
