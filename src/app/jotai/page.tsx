"use client";

import React from "react";
import Container from "@/app/(components)/Container";
import One from "@/app/jotai/One";
import Two from "@/app/jotai/Two";
import { useDouble } from "@/app/jotai/store";

function Page() {
  const double = useDouble();
  return (
    <Container>
      Double: {double}
      <One />
      <Two />
    </Container>
  );
}

export default Page;
