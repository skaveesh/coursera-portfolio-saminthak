import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  Image
} from "@chakra-ui/react";


const CustomModal = (isOpen, onClose, modalHeading, modalImage, modalDescription) => {
  return () => (
    <Modal isOpen={isOpen} onClose={onClose} scrollBehavior='inside' bg="yellow.400">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modalHeading}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={modalImage} alt={modalHeading} />
          <Text>{modalDescription}</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose} variant='bluePrimary'>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;