import Container from "@/app/(components)/Container";

function Double({ count }: Readonly<{ count: number }>) {
  const double = count * 2;
  return <Container>Double: {double}</Container>;
}

export default Double;
