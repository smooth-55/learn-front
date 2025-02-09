"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

interface QueryClientProps {
  children: React.ReactNode;
}

const HydratedQueryClientProvider: React.FC<QueryClientProps> = ({
  children,
}) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export { HydratedQueryClientProvider };
