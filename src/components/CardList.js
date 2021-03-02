import { React } from "react";

import { Stack } from "@chakra-ui/react";
import { LeftLinkList } from "./LeftLinkList";
import { TopBanner } from "./TopBanner";
import { GoogleClassCard } from "./GoogleClassCard";
import { SlidesCard } from "./SlidesCard";

export function CardList() {
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
