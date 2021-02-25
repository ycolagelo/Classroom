import { extendTheme } from "@chakra-ui/react";

const defaultProps = {
  colorScheme: "purple",
};

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {},
      defaultProps,
    },
    Checkbox: {
      baseStyle: {},
      defaultProps,
    },
    Input: {
      baseStyle: {},
      defaultProps,
    },
    Link: {
      baseStyle: {},
      defaultProps,
    },
  },
});

export default theme;
