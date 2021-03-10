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
import { isAuthenticated } from "../utils/user-util";

export function AccordionList({ lesson, comments, ...props }) {
  const authenticated = isAuthenticated();

  return (
    <Accordion allowMultiple allowToggle {...props}>
      <AccordionItem border="none">
        <Flex>
          {authenticated && (
            <AccordionButton
              _focus={{ boxShadow: "purple.200" }}
              // onClick={UpdateComments}
            >
              <ChatIcon color="purple.600" />
              <AccordionIcon color="purple.600" />
            </AccordionButton>
          )}
        </Flex>
        <AccordionPanel bg="white">
          <CommentList lesson={lesson} comments={comments} />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
