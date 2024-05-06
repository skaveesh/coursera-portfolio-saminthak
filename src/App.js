import './App.css';
import ContactMe from './components/ContactMe';
import { VStack, Box } from '@chakra-ui/react'
import Footer from './components/Footer';
import FeaturedProjects from './components/FeaturedProjects';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <VStack
      spacing={0}
      align='stretch'>
      <Portfolio></Portfolio>
      <FeaturedProjects></FeaturedProjects>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </VStack>
  );
}

export default App;
