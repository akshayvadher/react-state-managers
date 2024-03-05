"use client";

import React from "react";
import { Provider } from "react-redux";
import { Children } from "@/app/(components)/Container";
import { store } from "./store";

const Layout = ({ children }: Children) => (
  <Provider store={store}>{children}</Provider>
);

export default Layout;
