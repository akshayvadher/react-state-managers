"use client";

import React from "react";
import Container from "@/app/(components)/Container";
import One from "@/app/jotai/One";
import Two from "@/app/jotai/Two";
import Three from "@/app/jotai/Three";

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
