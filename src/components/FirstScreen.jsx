import React from 'react';
import { Flex, Button, Box, Text, Select } from '@chakra-ui/react';
import { getElinTime, getElinTimeString } from '../lib/calculations';

const FirstScreen = ({ data, setData, onClick }) => {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        const copy = { ...data, ...getElinTime(data) };
        copy.elinTimeString = getElinTimeString(data);
        setData(copy);
        onClick();
      }}
    >
      <Flex
        width={['18rem', '25rem', '40rem']}
        background="pink.100"
        padding={['2rem', '3rem', '4rem']}
        flexDirection="column"
        gridGap={['0.5rem', '1rem', '1.5rem']}
        borderRadius="1rem"
        boxShadow="2xl"
        fontSize={['1rem', '1.2rem', '1.5rem']}
      >
        <Text color="pink.800" fontSize={['0.75rem', '1rem', '1.2rem']}>
          Alle bør finne sin indre Elin.
        </Text>
        <Text color="pink.800" fontSize={['0.75rem', '1rem', '1.2rem']}>
          For å finne din prosentvise Elin må du fylle inn data i kalkulatoren under og trykke neste. Du vil da få en
          tid på en bestemt strekning som må tilbakelegges med sykkel.
        </Text>
        <Text color="pink.800" fontSize={['0.75rem', '1rem', '1.2rem']}>
          Denne tiden blir matchet mot Elin-tid og du vil få din Elin-prosent, eller nærmere bestemt din indre Elin.
        </Text>
        <Text color="pink.800" fontSize={['0.75rem', '1rem', '1.2rem']}>
          Så enkelt – lykke til.
        </Text>
        <Box>
          <Text color="pink.800">Biologisk kjønn</Text>
          <Select
            variant="filled"
            placeholder="Velg kjønn"
            background="pink.500"
            color="white"
            size="lg"
            fontSize={['1rem', '1.2rem', '1.5rem']}
            required
            onChange={event => {
              const copy = { ...data };
              copy.gender = event.target.value ? event.target.value : undefined;
              setData(copy);
            }}
          >
            <option value="female">Dame</option>
            <option value="male">Mann</option>
          </Select>
        </Box>
        <Box>
          <Text color="pink.800">Alder</Text>
          <Select
            variant="filled"
            placeholder="Velg alder"
            background="pink.500"
            color="white"
            size="lg"
            fontSize={['1rem', '1.2rem', '1.5rem']}
            required
            onChange={event => {
              const copy = { ...data };
              copy.age = event.target.value ? parseInt(event.target.value) : undefined;
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
          <Text color="pink.800">Kroppsvekt</Text>
          <Select
            variant="filled"
            placeholder="Velg kroppsvekt"
            background="pink.500"
            color="white"
            size="lg"
            fontSize={['1rem', '1.2rem', '1.5rem']}
            required
            onChange={event => {
              const copy = { ...data };
              copy.bodyweight = event.target.value ? parseInt(event.target.value) : undefined;
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
        <Box>
          <Text color="pink.800">Sykkelens vekt</Text>
          <Select
            variant="filled"
            placeholder="Velg sykkelens vekt"
            background="pink.500"
            color="white"
            size="lg"
            fontSize={['1rem', '1.2rem', '1.5rem']}
            required
            onChange={event => {
              const copy = { ...data };
              copy.bikeWeight = event.target.value ? parseInt(event.target.value) : undefined;
              setData(copy);
            }}
          >
            {new Array(300).fill('', 5, 31).map((_, index) => (
              <option key={index} value={index}>
                {index} kg
              </option>
            ))}
          </Select>
        </Box>
        <Button
          background="pink.300"
          fontSize={['1rem', '1.12rem', '1.25rem']}
          marginTop="1rem"
          _hover={{
            background: 'pink.200',
          }}
          type="submit"
        >
          GÅ VIDERE
        </Button>
      </Flex>
    </form>
  );
};

export default FirstScreen;
