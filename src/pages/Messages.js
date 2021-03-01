import {
  Box,
  Input,
  Stack,
  Textarea,
  Text,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";

const mockUsers = [
  { email: "mark@mps.com" },
  { email: "mark@mps.com" },
  { email: "mark@mps.com" },
  { email: "mark@mps.com" },
  { email: "mark@mps.com" },
  { email: "mark@mps.com" },
  { email: "mark@mps.com" },
  { email: "mark@mps.com" },
  { email: "mark@mps.com" },
  { email: "mark@mps.com" },
  { email: "mark@mps.com" },
  { email: "mark@mps.com" },
  { email: "mark@mps.com" },
  { email: "mark@mps.com" },
  { email: "mark@mps.com" },
  { email: "mark@mps.com" },
  { email: "mark@mps.com" },
  { email: "mark@mps.com" },
];

export function Messages() {
  return (
    <>
      <Stack direction="row" spacing={4}>
        <EmailList users={mockUsers} />
        <Stack py={4} pr={4} w="full">
          <MessageForm />
          <MessageHistory title="I need help" date="Date:2021/4/30">
            I need help with some of the work we did.
          </MessageHistory>
          <MessageHistory title="I need help" date="Date:2021/4/30">
            I need help with some of the work we did.
          </MessageHistory>
          <MessageHistory title="I need help" date="Date:2021/4/30">
            I need help with some of the work we did.
          </MessageHistory>
          <MessageHistory title="I need help" date="Date:2021/4/30">
            I need help with some of the work we did.
          </MessageHistory>
        </Stack>
      </Stack>
    </>
  );
}

function EmailList({ users, ...props }) {
  return (
    <Stack
      direction="column"
      bg="gray.50"
      w={{ base: "0px", sm: "350px" }}
      // 82px = header height. Make sure to update this if header height changes!
      position="sticky"
      top="82px"
      height="calc(100vh - 82px)"
      overflowY="auto"
      p={4}
      {...props}
    >
      <UnorderedList spacing={4} p={3}>
        {users.map((u) => (
          <ListItem>{u.email}</ListItem>
        ))}
      </UnorderedList>
    </Stack>
  );
}

function MessageForm({ ...props }) {
  return (
    <>
      <form>
        <Input placeholder="Subject" />
        <Textarea placeholder="Message" mt={4} height="200px" {...props} />
      </form>
      <Button
        width={{ base: "100px", sm: "150px" }}
        height={{ base: "30px", sm: "40px" }}
        // _focus={{}}
      >
        Submit
      </Button>
    </>
  );
}

function MessageHistory({ title, date, children, ...props }) {
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
