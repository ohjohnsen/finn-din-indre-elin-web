import React from 'react';
import { Flex, Button, Text, Select } from '@chakra-ui/react';

const SecondScreen = ({ data, setData, onClick }) => {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        const copy = { ...data };
        copy.currentTimeTotalSeconds =
          parseInt(copy.currentTimeMinutes) * 60 +
          parseInt(copy.currentTimeSeconds);
        copy.innerElinFactor =
          copy.elinTimeTotalSeconds / copy.currentTimeTotalSeconds;
        copy.innerElinFactorPercentage =
          Math.round(copy.innerElinFactor * 1000) / 10;
        setData(copy);
        onClick();
      }}
    >
      <Flex
        width={['18rem', '25rem', '40rem']}
        background="pink.100"
        padding={['2rem', '3.5rem', '5rem']}
        flexDirection="column"
        gridGap="2rem"
        borderRadius="1rem"
        boxShadow="2xl"
        fontSize={['1rem', '1.2rem', '1.5rem']}
        alignItems="center"
      >
        <a
          href="https://www.google.no/maps/dir/60.3934843,5.3406797/60.3926525,5.3497704/@60.3922536,5.3422133,16.48z/data=!4m2!4m1!3e1"
          target="_blank"
          rel="noreferrer"
        >
          Google Maps
        </a>
        <Flex flexDirection="row" alignItems="center" gridGap="1rem">
          <Text>Din Elin-tid:</Text>
          <Text fontSize={['5rem']} lineHeight={0}>
            {data.elinTimeString}
          </Text>
        </Flex>
        <Flex flexDirection="row" width="15rem">
          <Select
            variant="filled"
            placeholder="min"
            background="pink.500"
            color="white"
            size="lg"
            fontSize={['1rem', '1.2rem', '2rem']}
            required
            onChange={event => {
              const copy = { ...data };
              copy.currentTimeMinutes = event.target.value
                ? event.target.value
                : undefined;
              setData(copy);
            }}
          >
            {new Array(150).fill('', 0, 100).map((_, index) => (
              <option key={index} value={index}>
                {index.toLocaleString('no', {
                  minimumIntegerDigits: 2,
                })}
              </option>
            ))}
          </Select>
          <Text>:</Text>
          <Select
            variant="filled"
            placeholder="sek"
            background="pink.500"
            color="white"
            size="lg"
            fontSize={['1rem', '1.2rem', '2rem']}
            required
            onChange={event => {
              const copy = { ...data };
              copy.currentTimeSeconds = event.target.value
                ? event.target.value
                : undefined;
              setData(copy);
            }}
          >
            {new Array(150).fill('', 1, 60).map((_, index) => (
              <option key={index} value={index}>
                {index.toLocaleString('no', {
                  minimumIntegerDigits: 2,
                })}
              </option>
            ))}
          </Select>
        </Flex>
        <Button
          background="pink.300"
          fontSize={['1rem', '1.12rem', '1.25rem']}
          marginTop="2rem"
          _hover={{
            background: 'pink.200',
          }}
          type="submit"
        >
          FINN DIN INDRE ELIN
        </Button>
      </Flex>
    </form>
  );
};

export default SecondScreen;
