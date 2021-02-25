import {
  Box,
  Heading,
  Center,
  Text,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";

export function Profile() {
  return (
    <>
      <Box ml={4}>
        <Heading as="h6" size="lg" color="purple.800">
          Malaika Jele
        </Heading>
        <Text fontSize="2xl" fontWeight="medium">
          Age: 11
        </Text>
        <Text fontSize="2xl" fontWeight="medium">
          {" "}
          Grade: 5/6
        </Text>
      </Box>
      <Box mt={8} ml={4} mr={4} bg="gray.50">
        <Heading as="h6" size="md" color="purple.700" p={3}>
          About Malaika:
        </Heading>
        <Text id="text box" p={3}>
          She is an awesome girl and likes play.She is an awesome girl and likes
          play.She is an awesome girl and likes play.She is an awesome girl and
          likes play.She is an awesome girl and likes play.She is an awesome
          girl and likes play.
        </Text>
        <Button
          for="text box"
          ml={3}
          mb={3}
          height="30px"
          mt={4}
          color="gray.200"
        >
          Edit
        </Button>
      </Box>
      <Box mt={8} ml={4} mr={4} bg="gray.50">
        <Heading as="h6" size="md" color="purple.700" p={3}>
          Hobbies
        </Heading>
        <UnorderedList p={3}>
          <ListItem>Camping</ListItem>
          <ListItem>Dancing</ListItem>
          <ListItem>Reading</ListItem>
          <ListItem>Swimming</ListItem>
        </UnorderedList>
        <Button
          for="text box"
          ml={3}
          mb={3}
          height="30px"
          mt={4}
          color="gray.200"
        >
          Add Hobby
        </Button>
      </Box>
    </>
  );
}
