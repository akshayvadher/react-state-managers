import React, { useContext } from "react";
import Container from "@/app/(components)/Container";
import { CountContext } from "@/app/context/countContext";

function Double() {
  const { double } = useContext(CountContext);
  return <Container>Double: {double}</Container>;
}

export default Double;
