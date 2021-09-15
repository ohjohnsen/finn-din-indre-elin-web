import React from 'react';
import MainPage from './pages/MainPage';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { parse, getMinutes } from 'date-fns';
import { useColorMode } from '@chakra-ui/react';

const App = () => {
  const { colorMode } = useColorMode();
  console.log(colorMode);
  const foo = parse('02:08:24', 'HH:mm:ss', new Date());
  console.log(getMinutes(foo));

  return (
    <ChakraProvider theme={theme}>
      {/* <Box textAlign="center" fontSize="xl">
        <ColorModeSwitcher justifySelf="flex-end" />
        <Text color={colorMode === 'light' ? 'black' : 'red'}>irng</Text>
      </Box> */}
      <MainPage />
    </ChakraProvider>
  );
};

export default App;
