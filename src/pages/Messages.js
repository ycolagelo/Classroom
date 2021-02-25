import { Box, Input, Stack, Textarea, Text, Button } from "@chakra-ui/react";
import React from "react";

export function Messages() {
  return (
    <>
      <Stack mt={5} ml={8} mr={8}>
        <form>
          <Input placeholder="Subject" focusBorderColor="purple.300" />
          <Textarea
            placeholder="Message"
            mt={4}
            height="200px"
            focusBorderColor="purple.300"
          />
        </form>
        <Button
          bg="purple.400"
          width="150px"
          _focus={{
            boxShadow: "purple.800",
            outline: "purple.700",
          }}
          textColor="gray.100"
        >
          Submit
        </Button>
      </Stack>
      <Box
        mt={4}
        ml={8}
        mr={8}
        borderBottom="2px"
        borderBottomColor="purple.50"
        bg="gray.50"
        p={4}
      >
        <Text>Subject: Having trouble with math </Text>
        <Text>Date:2021/02/23</Text>
        <Text>I need help with some of the work we did.</Text>
      </Box>
    </>
  );
}
