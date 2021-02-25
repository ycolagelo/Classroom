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
    >
      <GridItem rowSpan={2} colSpan={1} bg="purple.100">
        <VStack
          // divider={<StackDivider borderColor="gray.200" />}
          spacing="1px"
          align=""
        >
          <Flex alignItems="center">
            <span>
              <Image
                boxSize="100px"
                objectFit="cover"
                src="/career-cruising.jpg"
                p={4}
                borderRadius="3xl"
              />
            </span>
            <Link fontWeight="medium" color="gray.700">
              Career Cruising{" "}
            </Link>
          </Flex>
          <Flex alignItems="center">
            <span>
              <Image
                boxSize="100px"
                objectFit="cover"
                src="/math-playground.png"
                p={4}
                borderRadius="3xl"
              />
            </span>
            <Link fontWeight="medium" color="gray.700">
              Math playground
            </Link>
          </Flex>
          <Flex alignItems="center">
            <span>
              <Image
                boxSize="100px"
                objectFit="cover"
                src="/Khan-academy.jfif"
                p={4}
                borderRadius="3xl"
              />
            </span>
            <Link fontWeight="medium" color="gray.700">
              Khan Academy
            </Link>
          </Flex>
          <Flex alignItems="center">
            <span>
              <Image
                boxSize="100px"
                objectFit="cover"
                src="/math-thumb.jfif"
                p={4}
                borderRadius="3xl"
              />
            </span>
            <Link fontWeight="medium" color="gray.700">
              Mathify
            </Link>
          </Flex>
        </VStack>
      </GridItem>
      <GridItem
        colSpan={4}
        backgroundImage="url(/cartoon-background.jpg)"
        backgroundPosition="inherit"
        backgroundRepeat="repeat-x"
      >
        <Center>
          <Heading pt="60px" size="2xl" color="purple.700">
            Mr.Thompson Grade 5/6
          </Heading>
        </Center>
      </GridItem>
      <GridItem colSpan={2} bg="purple.100">
        <Center>
          <Image
            p={4}
            borderRadius="full"
            boxSize="150px"
            src="/google-icon.png"
            alt="Google icon"
            // height="40px"
            // width="50px"
          />
        </Center>
        <Text pl={4}>Link:</Text>
        <Text pl={4} pb={4}>
          to be replaced with Google Link of the day
        </Text>
      </GridItem>
      <GridItem colSpan={2} bg="purple.100">
        <Center>
          <Image
            borderRadius="full"
            boxSize="150px"
            src="/google-slides.png"
            alt="Google icon"
            // height="40px"
            // width="50px"
          />
        </Center>
        <Text pl={4}>Link:</Text>
        <Text pl={4}>to be replaced with Google slide Link of the day</Text>
      </GridItem>
    </Grid>
  );
}
