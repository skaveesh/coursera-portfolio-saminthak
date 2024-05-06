import {
  Box,
  Flex
} from "@chakra-ui/react";

export default function FeaturedProjects() {
    return (
      <Box bg="blue.400" color="white">
      <Flex align="center" justify="center" h="100vh" >
        <Box p={6} rounded="md" w={640}>
          <span style={{ fontSize: "3em", fontFamily:"Pixelify Sans"}}>FEATURED PROJECTS</span>
        </Box>
      </Flex>
      </Box>
    );
  }