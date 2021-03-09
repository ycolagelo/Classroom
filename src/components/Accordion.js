import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Flex,
  AccordionPanel,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { CommentList } from "../components/CommentList";

export function AccordionList({ lesson, comments, ...props }) {
  return (
    <Accordion allowMultiple allowToggle {...props}>
      <AccordionItem border="none">
        <Flex>
          <AccordionButton
            _focus={{ boxShadow: "purple.200" }}
            // onClick={UpdateComments}
          >
            <ChatIcon color="purple.600" />
            <AccordionIcon color="purple.600" />
          </AccordionButton>
        </Flex>
        <AccordionPanel bg="white">
          <CommentList lesson={lesson} comments={comments} />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
