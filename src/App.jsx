import React from 'react';
import MainPage from './pages/MainPage';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { parse, getMinutes } from 'date-fns';
import { useColorMode } from '@chakra-ui/react';

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
  const { colorMode } = useColorMode();
  console.log(colorMode);
  const foo = parse('02:08:24', 'HH:mm:ss', new Date());
  console.log(getMinutes(foo));

  return (
    <ChakraProvider theme={theme}>
      <MainPage />
    </ChakraProvider>
  );
};

export default App;
