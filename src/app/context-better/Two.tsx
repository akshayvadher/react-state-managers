import React, { useContext } from "react";
import Container from "@/app/(components)/Container";
import Button from "@/app/(components)/Button";
import { CountContext } from "@/app/context/countContext";

function Two() {
  const { increment } = useContext(CountContext);
  return (
    <Container>
      <Button onClick={increment} />
    </Container>
  );
}

export default Two;
