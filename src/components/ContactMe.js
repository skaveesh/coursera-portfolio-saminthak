import { Formik, Field } from "formik";
import "@fontsource/pixelify-sans";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack
} from "@chakra-ui/react";

export default function ContactMe() {
    return (
      <Box bg="yellow.400">
      <Flex align="center" justify="center" h="100vh" >
        <Box p={6} rounded="md" w={640}>
          <span style={{ fontSize: "3em", fontFamily:"Pixelify Sans"}}>CONTACT ME</span>
          <Formik
            initialValues={{
              email: "",
              password: "",
              rememberMe: false
            }}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      variant="filled"
                    />
                  </FormControl>
                  <Button type="submit" color="white" bg="#4299e1" width="full">
                    Submit
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Flex>
      </Box>
    );
  }