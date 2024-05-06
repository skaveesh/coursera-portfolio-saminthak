import {
  Box,
  Flex
} from "@chakra-ui/react";
import "@fontsource/pixelify-sans";

export default function Footer() {
  function getYear() {
    return new Date().getFullYear();
  }

  return (
    <Box bg="blue.400" color="white">
      <Flex align="center" justify="center" h="10vh" >
        <h1 style={{ fontFamily: "Pixelify Sans" }}>ADVANCED REACT (META/COURSERA) - PORTFOLIO SAMINTHA.K. - {getYear()}</h1>
      </Flex>
    </Box>
  );
}