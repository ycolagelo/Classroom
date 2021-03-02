import { React } from "react";

import { Box, Center, Image, Text } from "@chakra-ui/react";

export function SlidesCard({ ...props }) {
  return (
    <Box p={1} bgColor="purple.200" {...props}>
      <Center>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="/google-slides.png"
          alt="Google icon"
        />
      </Center>
      <Text pl={4}>Link:</Text>
      <Text pl={4}>to be replaced with Google slide Link of the day</Text>
    </Box>
  );
}
