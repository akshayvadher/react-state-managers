import { Provider } from "jotai";
import { Children } from "@/app/(components)/Container";

const Layout = ({ children }: Children) => <Provider>{children}</Provider>;

export default Layout;
