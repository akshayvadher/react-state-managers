import React, { useContext } from "react";
import Container from "@/app/(components)/Container";
import { CountContext } from "@/app/context/countContext";

function Two() {
  const { increment } = useContext(CountContext);
  return (
    <Container>
      <button
        type="button"
        onClick={increment}
        className="border-2 p-2 m-2 bg-cyan-400 hover:bg-cyan-700 rounded-2"
      >
        Increase
      </button>
    </Container>
  );
}

export default Two;
