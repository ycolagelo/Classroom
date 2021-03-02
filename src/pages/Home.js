import React from "react";
import { Box } from "@chakra-ui/react";
import { Lesson } from "../components/Lesson";
import { CardList } from "../components/CardList";

export function Home() {
  return (
    <Box p={8}>
      <Box>
        <CardList />
      </Box>

      <Lesson title="Date:2021/4/30">
        This is what we are studying today because it is so cool.This is what we
        are studying today because it is so cool. This is what we are studying
        today because it is so cool.This is what we are studying today because
        it is so cool.This is what we are studying today because it is so
        cool.This is what we are studying today because it is so cool.
      </Lesson>
      <Lesson title=" Science Date:2021/4/30">
        This is what we are studying today because it is so cool.This is what we
        are studying today because it is so cool. This is what we are studying
        today because it is so cool.This is what we are studying today because
        it is so cool.This is what we are studying today because it is so
        cool.This is what we are studying today because it is so cool.
      </Lesson>
    </Box>
  );
}
