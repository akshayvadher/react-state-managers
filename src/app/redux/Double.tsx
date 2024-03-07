import React from "react";
import Container from "@/app/(components)/Container";
import { useDouble } from "@/app/redux/store";

function Double() {
  const c = useDouble();
  return <Container>Double: {c}</Container>;
}

export default Double;
