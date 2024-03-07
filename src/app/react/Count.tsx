import React from "react";
import Container from "@/app/(components)/Container";

function Count({ count }: { count: number }) {
  return <Container>Count: {count}</Container>;
}

export default Count;
