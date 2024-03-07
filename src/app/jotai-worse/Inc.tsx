import React from "react";
import Container from "@/app/(components)/Container";
import Button from "@/app/(components)/Button";
import { useAtom } from "jotai";
import { count } from "@/app/jotai-worse/store";

function Inc() {
  const [, setCount] = useAtom(count);
  const handleOnClick = () => {
    setCount((count) => count + 1);
  };
  return (
    <Container>
      <Button onClick={handleOnClick} />
    </Container>
  );
}

export default Inc;
