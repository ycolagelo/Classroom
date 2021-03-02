import { React } from "react";

import { Stack, UnorderedList, ListItem } from "@chakra-ui/react";

export function EmailList({ users, ...props }) {
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
