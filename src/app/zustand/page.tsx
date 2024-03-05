"use client";

import React from "react";
import Container from "@/app/(components)/Container";
import One from "@/app/zustand/One";
import Two from "@/app/zustand/Two";
import Three from "@/app/zustand/Three";

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
