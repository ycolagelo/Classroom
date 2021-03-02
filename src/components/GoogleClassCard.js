import { React } from "react";

import { Box, Center, Text, Image } from "@chakra-ui/react";

export function GoogleClassCard({ ...props }) {
  return (
    <Box p={1} bgColor="purple.200" {...props}>
      <Center>
        <Image
          p={4}
          borderRadius="full"
          boxSize="150px"
          src="/google-icon.png"
          alt="Google icon"
        />
      </Center>
      <Text pl={4}>Link:</Text>
      <Text pl={4} pb={4}>
        to be replaced with Google Link of the day
      </Text>
    </Box>
  );
}
