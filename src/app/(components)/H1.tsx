import { Children } from "@/app/(components)/Container";

function H1({ children }: Children) {
  return <h1 className="p-2 text-lg">{children}</h1>;
}

export default H1;
