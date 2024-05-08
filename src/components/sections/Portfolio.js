import profileImg from '../../images/dp.jpg';
import {
  Box,
  Flex,
  Image,
  Text,
  Highlight,
  Heading
} from "@chakra-ui/react";

export default function Portfolio() {
    return (
      <Box bg="yellow.400">
      <Flex align="center" justify="center" h="100vh" >
        <Box p={6} rounded="md" w={640} align="center">
          <Text fontSize='4xl' fontFamily="Pixelify Sans">hello!</Text>
          <Image
            borderRadius='full'
            boxSize='150px'
            src={profileImg}
            alt="Samintha Display Picture"
          />
          <Heading fontFamily="Pixelify Sans" lineHeight='tall' as="h2" size='xl' noOfLines={1}>
            <Highlight
              query={['SAMINTHA K.']}
              styles={{ fontFamily:"Pixelify Sans", color:"white", px: '2', py: '1', rounded: 'full', bg: 'blue.400' }}
            >
              i'm SAMINTHA K.
            </Highlight>
          </Heading>
          <br />
          <Text fontSize='4xl' fontFamily="Pixelify Sans">a Software Engineer interested in UI/UX and React frontend.</Text>
        </Box>
      </Flex>
      </Box>
    );
  }