"use client";

import React from "react";
import Container from "@/app/(components)/Container";
import One from "@/app/context/One";
import Two from "@/app/context/Two";
import Three from "@/app/context/Three";

function Page() {
  return (
    <Container>
      <One />
      <Two />
      <Three />
    </Container>
  );
}

export default Page;
