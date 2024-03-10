"use client";

import React from "react";
import Container from "@/app/(components)/Container";
import { useTodos } from "@/app/react-query/hooks/use-todos";
import { Status } from "@/app/react-query/todo.dto";
import H1 from "@/app/(components)/H1";

const Summary = () => {
  const { data, isLoading } = useTodos();
  if (isLoading) {
    return (
      <Container>
        <H1>Summary</H1>
        ...
      </Container>
    );
  }
  const total = data?.length;
  const done = data?.filter((td) => td.status === Status.DONE).length;
  const pending = data?.filter((td) => td.status === Status.PENDING).length;
  return (
    <Container>
      <H1>Summary</H1>✅ {done} ➕ ⌚ {pending} 🟰 {total}
    </Container>
  );
};

export default Summary;
