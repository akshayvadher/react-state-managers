"use client";

import React from "react";
import Container from "@/app/(components)/Container";
import One from "@/app/jotai/One";
import Two from "@/app/jotai/Two";
import Three from "@/app/jotai/Three";
import H1 from "@/app/(components)/H1";

function Page() {
  return (
    <Container>
      <H1>Jotai</H1>
      <One />
      <Two />
      <Three />
    </Container>
  );
}

export default Page;
