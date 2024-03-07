import React, {Dispatch, SetStateAction} from "react";
import Container from "@/app/(components)/Container";
import Button from "@/app/(components)/Button";

function Inc({ setCount }: { setCount: Dispatch<SetStateAction<number>> }) {
  const increment = () => {
    setCount((count) => count + 1);
  };
  return (
    <Container>
      <Button onClick={increment} />
    </Container>
  );
}

export default Inc;
