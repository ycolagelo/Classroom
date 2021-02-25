import React from "react";
import {
  Box,
  Heading,
  Image,
  GridItem,
  Text,
  Center,
  Grid,
  Link,
  Flex,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import { Card } from "../components/card";

export function Home() {
  return (
    <>
      <Box>
        <CardList />
      </Box>
      <Message title="Date:2021/4/30">
        This is what we are studying today because it is so cool.This is what we
        are studying today because it is so cool. This is what we are studying
        today because it is so cool.This is what we are studying today because
        it is so cool.This is what we are studying today because it is so
        cool.This is what we are studying today because it is so cool.
      </Message>
    </>
  );
}

function Message({ title, children, ...props }) {
  return (
    <Box
      mt={7}
      borderBottom="2px"
      borderBottomColor="purple.50"
      bg="gray.50"
      p={6}
      {...props}
    >
      <Text fontSize="xl">{title}</Text>
      <Text>{children}</Text>
    </Box>
  );
}

function CardList() {
  return (
    <Stack spacing={4} direction={{ base: "column-reverse", md: "row" }}>
      {/* Left Side link list */}
      <Stack spacing={1}>
        <LeftLinkList w={{ base: "full", md: "250px" }} />
      </Stack>
      {/* Right side */}
      <Stack width="full" spacing={4}>
        <TopBanner />
        <Stack
          direction={{ base: "column", sm: "row" }}
          spacing={4}
          justifyContent="space-between"
        >
          <GoogleClassCard width={{ base: "100%", sm: "50%" }} />
          <SlidesCard width={{ base: "100%", sm: "50%" }} />
        </Stack>
      </Stack>
    </Stack>
  );
}

function SlidesCard({ ...props }) {
  return (
    <Box p={1} bgColor="purple.200" {...props}>
      <Center>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="/google-slides.png"
          alt="Google icon"
        />
      </Center>
      <Text pl={4}>Link:</Text>
      <Text pl={4}>to be replaced with Google slide Link of the day</Text>
    </Box>
  );
}

function GoogleClassCard({ ...props }) {
  return (
    <Box p={1} bgColor="purple.200" {...props}>
      <Center>
        <Image
          p={4}
          borderRadius="full"
          boxSize="150px"
          src="/google-icon.png"
          alt="Google icon"
        />
      </Center>
      <Text pl={4}>Link:</Text>
      <Text pl={4} pb={4}>
        to be replaced with Google Link of the day
      </Text>
    </Box>
  );
}

function LeftLinkList({ ...props }) {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 1 }} bg="purple.100" {...props}>
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
    </SimpleGrid>
  );
}

function TopBanner({ ...props }) {
  return (
    <Box
      height="160px"
      backgroundImage="url(/cartoon-background.jpg)"
      backgroundRepeat="repeat-x"
      {...props}
    >
      <Center w="full">
        <Heading pt="60px" textAlign="center" size="2xl" color="purple.700">
          Mr.Thompson Grade 5/6
        </Heading>
      </Center>
    </Box>
  );
}

const t = (
  <Grid
    h="400px"
    templateRows="repeat(2, 1fr)"
    templateColumns="repeat(5, 1fr)"
    gap={4}
  >
    <GridItem rowSpan={2} colSpan={1} bg="purple.100"></GridItem>
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
    <GridItem colSpan={2} bg="purple.200"></GridItem>
    <GridItem colSpan={2} bg="purple.200"></GridItem>
  </Grid>
);
