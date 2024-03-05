import React from "react";
import { Children } from "@/app/(components)/Container";
import CountProvider from "@/app/context/CountProvider";

const Layout = ({ children }: Children) => (
  <CountProvider>{children}</CountProvider>
);

export default Layout;
