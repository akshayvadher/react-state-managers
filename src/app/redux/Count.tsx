import React from "react";
import Container from "@/app/(components)/Container";
import { useCount } from "@/app/redux/store";

function Count() {
  const c = useCount();
  return <Container>Count: {c}</Container>;
}

export default Count;
