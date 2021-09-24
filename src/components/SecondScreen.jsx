import React from 'react';
import { Flex, Button, Text, Select, Image, Box, Link } from '@chakra-ui/react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import kart from '../assets/kart.png';
import start from '../assets/start.png';
import maal from '../assets/maal.png';

const SecondScreen = ({ data, setData, onClick }) => {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        const copy = { ...data };
        copy.currentTimeTotalSeconds = parseInt(copy.currentTimeMinutes) * 60 + parseInt(copy.currentTimeSeconds);
        copy.innerElinFactor = copy.elinTimeTotalSeconds / copy.currentTimeTotalSeconds;
        copy.innerElinFactorPercentage = Math.round(copy.innerElinFactor * 1000) / 10;
        setData(copy);
        onClick();
      }}
    >
      <Flex
        width={['18rem', '25rem', '40rem']}
        background="pink.100"
        padding={['2rem', '3rem', '4rem']}
        flexDirection="column"
        gridGap={['1rem', '1.5rem', '2rem']}
        borderRadius="1rem"
        boxShadow="2xl"
        fontSize={['1rem', '1.2rem', '1.5rem']}
        alignItems="center"
      >
        <Text color="pink.800" fontSize={['0.75rem', '1rem', '1.2rem']}>
          Trykk på Google Maps for å se strekningen som skal tilbakelegges på sykkel, og på bilder for å zoome inn.
        </Text>

        <Flex flexDirection="column" width="100%" alignItems="center">
          <Zoom>
            <Box>
              <Image src={kart} alt="Bilde av kart" />
            </Box>
          </Zoom>
          <Link
            color="pink.800"
            href="https://www.google.no/maps/dir/60.3933369,5.3413883/60.3926525,5.3497704/@60.3921845,5.3437245,17z/data=!4m2!4m1!3e1"
            target="_blank"
            rel="noreferrer"
          >
            <Text fontSize={['1rem', '1.25rem', '1.5rem']}>Google Maps</Text>
          </Link>
        </Flex>

        <Flex alignItems="center" gridGap="0.5rem">
          <Text color="pink.800" fontSize={['0.75rem', '1rem', '1.2rem']}>
            Start – er der gjerdet begynner ved øvre inngang til Skansemyren idrettsplass
          </Text>
          <Zoom>
            <Box width="5rem">
              <Image src={start} alt="Bilde av startområdet" width="100px" />
            </Box>
          </Zoom>
        </Flex>

        <Flex alignItems="center" gridGap="0.5rem">
          <Text color="pink.800" fontSize={['0.75rem', '1rem', '1.2rem']}>
            Mål – er der det er en strek i asfalten etter den siste bratte bakken, (der grusen begynte før sykkel VM)
            like etter krysset inn til Søre Kamvei.
          </Text>
          <Zoom>
            <Box width="5rem">
              <Image src={maal} alt="Bilde av målområdet" />
            </Box>
          </Zoom>
        </Flex>

        <Flex flexDirection="row" alignItems="center" gridGap="1rem">
          <Text color="pink.800" fontSize={['1rem', '1.5rem', '2rem']}>
            Din Elin-tid:
          </Text>
          <Text color="pink.800" fontSize={['2rem', '3rem', '4rem']} lineHeight={0}>
            {data.elinTimeString}
          </Text>
        </Flex>

        <Flex flexDirection="column" alignItems="center" gridGap={['0.3rem', '0.4rem', '0.5rem']}>
          <Text color="pink.800" fontSize={['1rem', '1.5rem', '2rem']}>
            Din faktiske tid:
          </Text>
          <Flex flexDirection="row" width={['10rem', '12.5rem', '15rem']}>
            <Select
              variant="filled"
              placeholder="min"
              background="pink.500"
              color="white"
              size={['sm', 'md', 'lg']}
              borderRadius="0.25rem"
              fontSize={['1rem', '1.2rem', '2rem']}
              textAlign="center"
              required
              onChange={event => {
                const copy = { ...data };
                copy.currentTimeMinutes = event.target.value ? event.target.value : undefined;
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
            <Text color="pink.800" fontSize={['1rem', '1.2rem', '2rem']} padding="0 0.25rem">
              :
            </Text>
            <Select
              variant="filled"
              placeholder="sek"
              background="pink.500"
              color="white"
              size={['sm', 'md', 'lg']}
              borderRadius="0.25rem"
              fontSize={['1rem', '1.2rem', '2rem']}
              textAlign="center"
              required
              onChange={event => {
                const copy = { ...data };
                copy.currentTimeSeconds = event.target.value ? event.target.value : undefined;
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
        </Flex>
        <Button
          background="pink.300"
          fontSize={['1rem', '1.12rem', '1.25rem']}
          marginTop="1rem"
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
