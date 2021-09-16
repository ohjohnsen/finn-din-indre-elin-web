import React from 'react';
import { Flex, Button, Box, Text, Select } from '@chakra-ui/react';

const FirstScreen = ({ data, setData, onClick }) => {
  return (
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
          onChange={event => {
            const copy = { ...data };
            copy.gender = event.target.value ? event.target.value : undefined;
            setData(copy);
          }}
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
          onChange={event => {
            const copy = { ...data };
            copy.age = event.target.value ? event.target.value : undefined;
            setData(copy);
          }}
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
          onChange={event => {
            const copy = { ...data };
            copy.weight = event.target.value ? event.target.value : undefined;
            setData(copy);
          }}
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
        onClick={onClick}
      >
        BEREGN
      </Button>
    </Flex>
  );
};

export default FirstScreen;
