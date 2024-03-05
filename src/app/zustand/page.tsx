"use client";

import React from "react";
import Container from "@/app/(components)/Container";
import One from "@/app/zustand/One";
import Two from "@/app/zustand/Two";
import Three from "@/app/zustand/Three";
import H1 from "@/app/(components)/H1";

function Page() {
  return (
    <Container>
      <H1>Zustand</H1>
      <One />
      <Two />
      <Three />
    </Container>
  );
}

export default Page;
