import React from "react";
import Container from "@/app/(components)/Container";
import { useAtom } from "jotai";
import { count } from "@/app/jotai-worse/store";

function One() {
  const [c] = useAtom(count);
  return <Container>Count: {c}</Container>;
}

export default One;
