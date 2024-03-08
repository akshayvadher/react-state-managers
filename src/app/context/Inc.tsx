import Container from "@/app/(components)/Container";
import Button from "@/app/(components)/Button";
import { useCountContext } from "@/app/context/CountProvider";

function Inc() {
  const { increment } = useCountContext();
  return (
    <Container>
      <Button onClick={increment} />
    </Container>
  );
}

export default Inc;
