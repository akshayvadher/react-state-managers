"use client";

import React, { useContext } from "react";
import Container from "@/app/(components)/Container";
import One from "@/app/context/One";
import Two from "@/app/context/Two";
import { CountContext } from "@/app/context/countContext";

function Page() {
  const { double } = useContext(CountContext);
  return (
    <Container>
      Double: {double}
      <One />
      <Two />
    </Container>
  );
}

export default Page;
