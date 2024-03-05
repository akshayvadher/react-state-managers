import React from "react";
import Container from "@/app/(components)/Container";
import { useCount } from "@/app/zustand/store";

function One() {
  const c = useCount();
  return <Container>{c}</Container>;
}

export default One;
