import React, { useState } from 'react';
import { Flex, Text, Fade } from '@chakra-ui/react';
import FirstScreen from '../components/FirstScreen';
import ProgressScreen from '../components/ProgressScreen';
import ResultScreen from '../components/ResultScreen';

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
      width="100vw"
      background="pink.300"
      flexDirection="column"
      alignItems="center"
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
          onClick={() => setState('progress')}
        />
      </Fade>
      <Fade
        in={state === 'progress'}
        delay={{ enter: 0.2, exit: 0 }}
        unmountOnExit
      >
        <ProgressScreen onContinue={() => setState('result')} />
      </Fade>
      <Fade
        in={state === 'result'}
        delay={{ enter: 0.4, exit: 0 }}
        unmountOnExit
      >
        <ResultScreen />
      </Fade>
    </Flex>
  );
};

export default MainPage;
