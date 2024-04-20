import Container from "@/app/(components)/Container";

function Count({ count }: Readonly<{ count: number }>) {
  return <Container>Count: {count}</Container>;
}

export default Count;
