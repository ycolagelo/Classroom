import { React } from "react";
import { Box, Text } from "@chakra-ui/react";

export function MessageHistory({ title, date, children, ...props }) {
  return (
    <Box
      borderBottom="2px"
      borderBottomColor="purple.50"
      bg="gray.50"
      p={4}
      {...props}
    >
      <Text fontWeight="medium">{title}</Text>
      <Text>{children}</Text>
      <Text fontWeight="thin" pt={2} fontSize="smaller">
        {date}
      </Text>
    </Box>
  );
}
