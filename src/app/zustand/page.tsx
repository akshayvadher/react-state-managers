"use client";

import React from "react";
import Container from "@/app/(components)/Container";
import One from "@/app/zustand/One";
import Two from "@/app/zustand/Two";
import { useDouble } from "@/app/zustand/store";

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
