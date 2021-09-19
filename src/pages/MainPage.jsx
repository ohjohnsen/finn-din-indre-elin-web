import React, { useState } from 'react';
import { Flex, Text, Fade } from '@chakra-ui/react';
import FirstScreen from '../components/FirstScreen';
import SecondScreen from '../components/SecondScreen';
import ProgressScreen from '../components/ProgressScreen';
import ResultScreen from '../components/ResultScreen';

const MainPage = () => {
  const [state, setState] = useState('first');
  const [data, setData] = useState({
    gender: undefined,
    age: undefined,
    bodyweight: undefined,
    bikeWeight: undefined,
    elinTimeMinutes: undefined,
    elinTimeSeconds: undefined,
    elinTimeTotalSeconds: undefined,
    elinTimeString: undefined,
    currentTimeMinutes: undefined,
    currentTimeSeconds: undefined,
    currentTimeTotalSeconds: undefined,
    currentTimeString: undefined,
    innerElinFactor: undefined,
    innerElinFactorPercentage: undefined,
  });

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
          onClick={() => setState('second')}
        />
      </Fade>
      <Fade
        in={state === 'second'}
        delay={{ enter: 0.2, exit: 0 }}
        unmountOnExit
      >
        <SecondScreen
          data={data}
          setData={setData}
          onClick={() => setState('result')}
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
        delay={{ enter: 0.2, exit: 0 }}
        unmountOnExit
      >
        <ResultScreen data={data} />
      </Fade>
    </Flex>
  );
};

export default MainPage;
