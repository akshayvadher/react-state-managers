import React, { useContext } from "react";
import Container from "@/app/(components)/Container";
import { CountContext } from "@/app/context/countContext";

function One() {
  const { count } = useContext(CountContext);
  return <Container>{count}</Container>;
}

export default One;
