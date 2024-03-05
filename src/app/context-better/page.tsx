"use client";

import React from "react";
import Container from "@/app/(components)/Container";
import One from "@/app/context-better/One";
import Two from "@/app/context-better/Two";
import Three from "@/app/context-better/Three";
import H1 from "@/app/(components)/H1";

function Page() {
  return (
    <Container>
      <H1>React Context</H1>
      <One />
      <Two />
      <Three />
    </Container>
  );
}

export default Page;
