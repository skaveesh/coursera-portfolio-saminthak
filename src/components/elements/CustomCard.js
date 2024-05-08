import React from 'react';
import {
  Card,
  CardBody,
  VStack,
  Heading,
  Button,
  Text,
  Box,
} from '@chakra-ui/react';

const borderRadius = '15px';

const basicCardStyles = {
  borderRadius: borderRadius,
  bgSize: 'cover',
  bgPosition: 'center',
  bgRepeat: 'no-repeat',
};

const basicCardBodyStyles = {
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: 'white',
  backdropFilter: 'blur(8px)',
  borderRadius: borderRadius,
  border: '10px solid #ECC94B',
};

const CustomCard = (image, heading, description, onOpen, sendDataToParent) => {

  const handleClickToSendData = () => {
    sendDataToParent(heading, image, description);
  };

  const substringDesc = (description) => {
    if (description.length > 50) {
      return description.substring(0, 50) + '...';
    }
    return description;
  }

  return (props) => (
    <Card {...props} sx={basicCardStyles} minW='250px' maxW='250px' minH='250px' maxH='250px' bgImage={image || 'https://i.imgur.com/rHa56Lv.jpeg'} >
      <CardBody sx={basicCardBodyStyles}>
        <VStack mt='6' spacing='3'>
          <Box h='20px'>
            <Heading size='md'>{heading}</Heading>
          </Box>
          <Box h='80px'>
            <Text>{substringDesc(description)}</Text>
          </Box>
          <Box h='20px'>
            <Button mb='5px' onClick={() => { handleClickToSendData(); onOpen(); }} variant='yellowPrimary'>See more</Button>
          </Box>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default CustomCard;