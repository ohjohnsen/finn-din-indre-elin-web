import React from 'react';
import MainPage from './pages/MainPage';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Select: {
      variants: {
        filled: {
          field: {
            _hover: {
              background: 'pink.300',
            },
            _focus: {
              background: 'pink.300',
            },
            '>option': {
              background: 'pink.500',
              color: 'white',
              fontSize: '1.25rem',
            },
            ">option[value='coffee']": {
              background: 'black',
              color: 'white',
            },
          },
        },
      },
    },
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <MainPage />
    </ChakraProvider>
  );
};

export default App;
