import React from 'react';
import { Flex, Button, Text } from '@chakra-ui/react';

const SecondScreen = ({ data, setData, onClick }) => {
  return (
    <Flex
      width={['18rem', '25rem', '40rem']}
      background="pink.100"
      padding={['2rem', '3.5rem', '5rem']}
      flexDirection="column"
      gridGap="2rem"
      borderRadius="1rem"
      boxShadow="2xl"
      fontSize={['1rem', '1.2rem', '1.5rem']}
    >
      <a
        href="https://www.google.no/maps/dir/60.3934843,5.3406797/60.3926525,5.3497704/@60.3922536,5.3422133,16.48z/data=!4m2!4m1!3e1"
        target="_blank"
        rel="noreferrer"
      >
        Google Maps
      </a>
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        gridGap="1rem"
      >
        <Text>Din Elin-tid:</Text>
        <Text fontSize={['5rem']}>{data.elinTimeString}</Text>
      </Flex>
      <form
        onSubmit={event => {
          event.preventDefault();
          onClick();
        }}
      ></form>
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
  );
};

export default SecondScreen;
