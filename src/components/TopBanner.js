import { React } from "react";

import { Box, Center, Heading } from "@chakra-ui/react";
import { getStaticUrl } from "../utils/static-url-util";

export function TopBanner({ ...props }) {
  return (
    <Box
      height="160px"
      backgroundImage={`url(${getStaticUrl("/images/cartoon-background.jpg")})`}
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
