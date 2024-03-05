import React from "react";
import Container from "@/app/(components)/Container";
import { useCount } from "@/app/jotai/store";

function One() {
  const c = useCount();
  return <Container>Count: {c}</Container>;
}

export default One;
