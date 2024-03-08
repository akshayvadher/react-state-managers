"use client";

import { Children } from "@/app/(components)/Container";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Layout = ({ children }: Children) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Layout;
