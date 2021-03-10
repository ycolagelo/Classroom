import {
  Box,
  Heading,
  Center,
  Text,
  Button,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { getProfile } from "../api/profileUtil";
import { getUser } from "../utils/user-util";

export function Profile() {
  const [profileData, setProfileData] = useState({});
  const user = getUser();
  useEffect(() => {
    getProfile().then((data) => {
      setProfileData(data);
    });
  }, []);

  return (
    <>
      <Box ml={4}>
        <Heading as="h6" size="lg" color="purple.800">
          {profileData?.user_information?.user}
        </Heading>
        <Text fontSize="2xl" fontWeight="medium">
          Age: {profileData?.user_information?.user_age}
        </Text>
        <Text fontSize="2xl" fontWeight="medium">
          Grade: {profileData?.user_information?.user_grade}
        </Text>
      </Box>
      <Box mt={8} ml={4} mr={4} bg="gray.50">
        <Heading as="h6" size="md" color="purple.700" p={3}>
          About {user}:
        </Heading>
        <Text id="text box" p={3}>
          {profileData?.user_information?.userInfo}
        </Text>
        <Button ml={3} mb={3} height="30px" mt={4} color="gray.200">
          Edit
        </Button>
      </Box>
      <Box mt={8} ml={4} mr={4} bg="gray.50">
        <Heading as="h6" size="md" color="purple.700" p={3}>
          My Hobbies
        </Heading>
        {profileData.user_hobbies?.map((hobby) => (
          <UnorderedList p={2}>
            <ListItem>{hobby.hobbies}</ListItem>
          </UnorderedList>
        ))}
        <Button ml={3} mb={3} height="30px" mt={4} color="gray.200">
          Add Hobby
        </Button>
      </Box>
    </>
  );
}
