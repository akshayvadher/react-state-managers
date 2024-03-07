import React from "react";
import Container from "@/app/(components)/Container";
import Button from "@/app/(components)/Button";
import { useIncrement } from "@/app/zustand/store";

function Inc() {
  const increment = useIncrement();
  return (
    <Container>
      <Button onClick={increment} />
    </Container>
  );
}

export default Inc;
