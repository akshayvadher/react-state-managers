import React from "react";
import Container from "@/app/(components)/Container";
import { useDouble } from "@/app/zustand/store";

function Three() {
  const c = useDouble();
  return <Container>Double: {c}</Container>;
}

export default Three;
