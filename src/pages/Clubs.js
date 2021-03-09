import {
  Box,
  Grid,
  GridItem,
  Center,
  Image,
  Text,
  Heading,
  VStack,
  Flex,
  Link,
} from "@chakra-ui/react";
import React from "react";

export function Clubs() {
  return (
    <Grid
      h="400px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    ></Grid>
  );
}
