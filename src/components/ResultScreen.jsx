import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';

const ResultScreen = () => {
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
      <Box>
        <Text color="pink.800">Resultat</Text>
      </Box>
    </Flex>
  );
};

export default ResultScreen;
