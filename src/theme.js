import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    body: {
      bg: 'blue.700',
      color: 'white',
    }
  }
}

export const theme = extendTheme({ styles });