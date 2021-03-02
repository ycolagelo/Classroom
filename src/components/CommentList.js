import React from "react";
import { Box, Textarea, Button, Text } from "@chakra-ui/react";

export function CommentList({ ...props }) {
  return (
    <Box pt={2} w="98%" pl={6}>
      <Textarea
        placeholder="Add Comment"
        size="sm"
        borderRadius="10px"
        h={4}
        id="comment"
        {...props}
      />
      <Button for="comment" h="29px">
        Post
      </Button>
      <Box pt={2}>
        <Box borderBottom="1px" borderColor="purple.100" pb={2}>
          <Text fontWeight="medium">Malaika</Text>
          <Text fontWeight="light" fontSize="smaller">
            2021/5/06
          </Text>
          This is a comment from one of the students from me at school
        </Box>
      </Box>
    </Box>
  );
}
