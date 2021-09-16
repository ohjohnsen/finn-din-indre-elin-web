import React from 'react';
import { Box, Flex, Select, Text, Button } from '@chakra-ui/react';

const MainPage = () => {
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
      <Flex
        width="100%"
        maxWidth="50rem"
        background="pink.100"
        padding="5rem"
        flexDirection="column"
        gridGap="2rem"
        borderRadius="1rem"
        boxShadow="2xl"
        fontSize="1.5rem"
      >
        <Box>
          <Text color="pink.800">Biologisk kjønn</Text>
          <Select
            placeholder="Velg kjønn"
            background="pink.500"
            fontSize="1.5rem"
            size="lg"
          >
            <option value="dame">Dame</option>
            <option value="mann">Mann</option>
          </Select>
        </Box>
        <Box>
          <Text color="pink.800">Alder</Text>
          <Select
            placeholder="Velg alder"
            background="pink.500"
            fontSize="1.5rem"
            size="lg"
          >
            {new Array(150).fill('', 1, 121).map((_, index) => (
              <option key={index} value={index}>
                {index} år
              </option>
            ))}
          </Select>
        </Box>
        <Box>
          <Text color="pink.800">Vekt</Text>
          <Select
            placeholder="Velg vekt"
            background="pink.500"
            fontSize="1.5rem"
            size="lg"
          >
            {new Array(300).fill('', 25, 251).map((_, index) => (
              <option key={index} value={index}>
                {index} kg
              </option>
            ))}
          </Select>
        </Box>
        <Button
          background="pink.300"
          fontSize="1.25rem"
          marginTop="1rem"
          _hover={{
            background: 'pink.200',
          }}
          onClick={() => {
            console.log('foo');
          }}
        >
          BEREGN
        </Button>
      </Flex>
    </Flex>
  );
};

export default MainPage;
