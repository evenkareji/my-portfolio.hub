import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `Impact`,
    body: `"Shippori Mincho"`,
  },
  styles: {
    global: {
      body: {
        backgroundColor: 'white',
        color: 'black',
      },
    },
  },
});

export default theme;
