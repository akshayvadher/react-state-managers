import React from "react";
import Container from "@/app/(components)/Container";

function One({ count }: { count: number }) {
  return <Container>Count: {count}</Container>;
}

export default One;
