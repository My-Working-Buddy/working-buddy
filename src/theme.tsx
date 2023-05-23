import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Fredoka One', display`,
    body: `'ABeeZee', sans-serif`,
  },
  colors: {
    blue: {
      900: "#1A365D",
    },
    white: "#FFFFFF",
  },
});

export default theme;
