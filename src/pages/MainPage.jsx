import React, { useState } from 'react';
import { Flex, Box, Fade, Text, Link } from '@chakra-ui/react';
import FirstScreen from '../components/FirstScreen';
import SecondScreen from '../components/SecondScreen';
import ProgressScreen from '../components/ProgressScreen';
import ResultScreen from '../components/ResultScreen';
import logo from '../assets/logo.png';

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
      <Box padding={['2rem 1rem', '2rem 2rem', '2rem 4rem']}>
        <img src={logo} alt="Logo" />
      </Box>
      <Fade in={state === 'first'} unmountOnExit>
        <FirstScreen data={data} setData={setData} onClick={() => setState('second')} />
      </Fade>
      <Fade in={state === 'second'} delay={{ enter: 0.2, exit: 0 }} unmountOnExit>
        <SecondScreen data={data} setData={setData} onClick={() => setState('result')} />
      </Fade>
      <Fade in={state === 'progress'} delay={{ enter: 0.2, exit: 0 }} unmountOnExit>
        <ProgressScreen onContinue={() => setState('result')} />
      </Fade>
      <Fade in={state === 'result'} delay={{ enter: 0.2, exit: 0 }} unmountOnExit>
        <ResultScreen data={data} />
      </Fade>
      <Text paddingTop="1rem" paddingBottom="1rem" fontSize={['0.7rem', '0.85rem', '1rem']}>
        Av Rune Myklebust og{' '}
        <Link href="mailto:oystein@holvikjohnsen.no" _hover={{ textDecoration: 'underline' }}>
          Øystein Holvik Johnsen
        </Link>{' '}
        med ♥
      </Text>
    </Flex>
  );
};

export default MainPage;
