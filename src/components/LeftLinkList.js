import { React } from "react";

import { SimpleGrid, Flex, Image, Link } from "@chakra-ui/react";

export function LeftLinkList({ ...props }) {
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
