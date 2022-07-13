import { Box } from "@chakra-ui/react";
import React from "react";

export function Section({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <section>{children}</section>
    </Box>
  );
}
