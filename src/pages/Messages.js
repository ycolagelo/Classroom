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
import { EmailList } from "../components/EmailList";
import { MessageHistory } from "../components/MessageHistory";
import { MessageForm } from "../components/MessageForm";

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
        <EmailList users={mockUsers} display={{ base: "none", md: "flex" }} />
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
