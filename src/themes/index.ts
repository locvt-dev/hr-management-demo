import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: 'var(--font-poppins)',
    body: 'var(--font-poppins)',
  },
  styles: {
    global: {
      body: {
        fontWeight: 400,
      },
    },
  },
});

export default theme;
