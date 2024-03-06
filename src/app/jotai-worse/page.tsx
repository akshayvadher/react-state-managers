"use client";

import React from "react";
import Container from "@/app/(components)/Container";
import One from "@/app/jotai-worse/One";
import Two from "@/app/jotai-worse/Two";
import Three from "@/app/jotai-worse/Three";
import H1 from "@/app/(components)/H1";

function Page() {
  return (
    <Container>
      <H1>Jotai - worse</H1>
      <One />
      <Two />
      <Three />
    </Container>
  );
}

export default Page;
