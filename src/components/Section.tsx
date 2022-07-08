import { Box } from "@chakra-ui/react";
import React from "react";

export function Section({ children }: { children: React.ReactNode }) {
  return (
    <Box p="4" borderColor="gray.300" borderWidth="1px" m="4" borderRadius="lg">
      <section>{children}</section>
    </Box>
  );
}
