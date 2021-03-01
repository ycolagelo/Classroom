import { extendTheme } from "@chakra-ui/react";

const defaultDefaultProps = {
  colorScheme: "purple",
};

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {},
      defaultProps: defaultDefaultProps,
    },
    Checkbox: {
      baseStyle: {},
      defaultProps: defaultDefaultProps,
    },
    Input: {
      baseStyle: {},
      defaultProps: { ...defaultDefaultProps, focusBorderColor: "purple.300" },
    },
    Textarea: {
      defaultProps: { ...defaultDefaultProps, focusBorderColor: "purple.300" },
      baseStyle: {},
    },
    Link: {
      baseStyle: {},
      defaultProps: defaultDefaultProps,
    },
  },
});

export default theme;
