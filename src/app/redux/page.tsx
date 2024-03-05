"use client";

import React from "react";
import Container from "@/app/(components)/Container";
import One from "@/app/redux/One";
import Two from "@/app/redux/Two";
import Three from "@/app/redux/Three";
import H1 from "@/app/(components)/H1";

function Page() {
  return (
    <Container>
      <H1>Redux</H1>
      <One />
      <Two />
      <Three />
    </Container>
  );
}

export default Page;
