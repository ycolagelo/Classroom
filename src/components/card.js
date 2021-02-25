import React from "react";
import { Box } from "@chakra-ui/react";

export function Card({ ...props }) {
  return (
    <Box
      borderRadius="sm"
      boxShadow="md"
      bg="purple.100"
      minHeight="150px"
      p={4}
      {...props}
    />
  );
}
