import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const ResultScreen = ({ data }) => {
  return (
    <Flex
      width={['18rem', '25rem', '40rem']}
      background="pink.100"
      padding="5rem"
      flexDirection="column"
      gridGap="2rem"
      borderRadius="1rem"
      boxShadow="2xl"
      fontSize="1.5rem"
    >
      <Text color="pink.800">Resultat</Text>
      <Text color="pink.800" fontSize={['2rem', '3rem', '4rem']}>
        {data.innerElinFactorPercentage}%
      </Text>
    </Flex>
  );
};

export default ResultScreen;
