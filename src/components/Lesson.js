import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import { AccordionList } from "../components/Accordion";

export function Lesson({ lesson }) {
  return (
    <Box
      mt={7}
      borderBottom="2px"
      borderBottomColor="purple.50"
      bg="gray.50"
      p={4}
    >
      <Text fontWeight="semibold" fontSize="xl">
        {lesson.topic}
      </Text>
      <Stack isInline>
        <Text fontSize="md">{lesson.subject}</Text>
        <Text opacity={0.6} fontSize="md">
          {lesson.start_date}
        </Text>
      </Stack>
      <Text mt={2} pb={4}>
        {lesson.lesson}
      </Text>
      <AccordionList lesson={lesson} />
    </Box>
  );
}
