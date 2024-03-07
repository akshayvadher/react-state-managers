import Container from "@/app/(components)/Container";
import Button from "@/app/(components)/Button";
import { useIncrement } from "@/app/jotai/store";

function Inc() {
  const increment = useIncrement();
  return (
    <Container>
      <Button onClick={increment} />
    </Container>
  );
}

export default Inc;
