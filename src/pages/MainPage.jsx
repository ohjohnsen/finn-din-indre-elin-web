import React, { useState } from 'react';
import { Box, Flex, Select, Text, Button, Fade } from '@chakra-ui/react';
import FirstScreen from '../components/FirstScreen';
import SecondScreen from '../components/SecondScreen';

const MainPage = () => {
  const [state, setState] = useState('first');
  const [data, setData] = useState({
    age: undefined,
    weight: undefined,
    gender: undefined,
  });

  console.log(data);
  return (
    <Flex
      height="100vh"
      background="pink.300"
      flexDirection="column"
      alignItems="center"
      padding="5rem"
      overflowY="scroll"
      color="white"
    >
      <Text as="h1" fontSize="3rem" marginBottom="2rem">
        Finn din indre Elin
      </Text>
      <Fade in={state === 'first'} unmountOnExit>
        <FirstScreen
          data={data}
          setData={setData}
          onClick={() => setState('second')}
        />
      </Fade>
      <Fade in={state === 'second'} unmountOnExit>
        <SecondScreen />
      </Fade>
    </Flex>
  );
};

export default MainPage;
