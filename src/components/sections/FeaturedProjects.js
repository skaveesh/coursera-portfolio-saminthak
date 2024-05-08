import { useState, useEffect } from "react"; 
import {
  Box,
  Flex,
  SimpleGrid,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import CustomSpinner from "../elements/CustomSpinner";
import CustomCard from "../elements/CustomCard";
import CustomModal from "../elements/CustomModal";

export default function FeaturedProjects() {

  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProjects = () => {
    setIsLoading(true);
    fetch('https://portfolio-saminthak.netlify.app/featuredprojects.json')
      .then(response => response.json())
      .then(projects => {
        setProjects(projects);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const [modalHeading, setModalHeading] = useState("");
  const [modalImage, setModalImage] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  const receiveDataFromChild  = (heading, image, description) => {
    setModalHeading(heading);
    setModalImage(image);
    setModalDescription(description);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const FeaturedProjectsModal = CustomModal(isOpen, onClose, modalHeading, modalImage, modalDescription);

  return (
    <>
      <Box bg="blue.400" color="white">
        <Flex align="center" justify="center" h={isLoading ? "100vh" : "100%"}>
          <Box p={6} rounded="md" w={640}>
            <Heading fontFamily="Pixelify Sans" lineHeight='tall' as="h2" size='xl' noOfLines={1}>FEATURED PROJECTS</Heading>
            <div align="center">
              {isLoading ? <CustomSpinner /> :
                <SimpleGrid columns={2} spacing={5}>
                  {
                  projects.map(item => {
                    const ProjectCard = CustomCard(item.image, item.name, item.description, onOpen, receiveDataFromChild);
                    return (
                      <ProjectCard key={item.id} />
                    );
                  })
                  }
                </SimpleGrid>
              }
            </div>
          </Box>
        </Flex>
      </Box>
      <FeaturedProjectsModal />
    </>
  );
  }