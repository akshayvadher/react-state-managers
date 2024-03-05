import React from "react";
import Container from "@/app/(components)/Container";
import Button from "@/app/(components)/Button";
import { useIncrement } from "@/app/jotai/store";

function Two() {
  const increment = useIncrement();
  return (
    <Container>
      <Button onClick={increment} />
    </Container>
  );
}

export default Two;
