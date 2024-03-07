import Container from "@/app/(components)/Container";
import { useAtom } from "jotai";
import { count } from "@/app/jotai-worse/store";

function Count() {
  const [c] = useAtom(count);
  return <Container>Count: {c}</Container>;
}

export default Count;
