import React from "react";
import Container from "@/app/(components)/Container";
import Button from "@/app/(components)/Button";
import { useDispatch } from "react-redux";
import { incremented } from "@/app/redux/store";

function Two() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(incremented());
  };
  return (
    <Container>
      <Button onClick={handleClick} />
    </Container>
  );
}

export default Two;
