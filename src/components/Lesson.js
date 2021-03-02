import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { AccordionList } from "../components/Accordion";

export function Lesson({ title, date, children, ...props }) {
  return (
    <Box
      mt={7}
      borderBottom="2px"
      borderBottomColor="purple.50"
      bg="gray.50"
      p={4}
      {...props}
    >
      <Text fontSize="xl">{title}</Text>
      <Text fontSize="xl">{date}</Text>
      <Text pb={4}>{children}</Text>
      <AccordionList />
    </Box>
  );
}
