"use client";

import React from "react";
import Container from "@/app/(components)/Container";
import { useTodos } from "@/app/react-query/hooks/use-todos";
import ToDo from "@/app/react-query/ToDo";
import AddToDo from "@/app/react-query/AddToDo";

const ToDoList = () => {
  const { data, isLoading, isError, error } = useTodos();
  if (isLoading) {
    return <Container>...loading...</Container>;
  }
  if (isError) {
    return <Container>{error.message}</Container>;
  }
  return (
    <Container>
      {data?.map((todo) => <ToDo todo={todo} key={todo.id} />)}
      <AddToDo />
    </Container>
  );
};

export default ToDoList;
