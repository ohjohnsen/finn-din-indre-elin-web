import React, { useEffect } from 'react';
import { Flex, Spinner, Text } from '@chakra-ui/react';

const ProgressScreen = ({ onContinue }) => {
  useEffect(() => {
    setTimeout(() => {
      onContinue();
    }, 2000);
  }, [onContinue]);
  return (
    <Flex
      width={['18rem', '25rem']}
      background="pink.100"
      flexDirection="column"
      gridGap="2rem"
      borderRadius="1rem"
      boxShadow="2xl"
      fontSize="1.5rem"
      alignItems="center"
      justifyContent="center"
      height="15rem"
    >
      <Spinner color="pink.800" size="xl" thickness="4px" />
      <Text fontSize={['1.4rem', '2rem']} color="pink.800">
        Beregner...
      </Text>
    </Flex>
  );
};

export default ProgressScreen;
