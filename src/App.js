import './App.css';
import ContactMe from './components/sections/ContactMe';
import { VStack } from '@chakra-ui/react'
import Footer from './components/sections/Footer';
import FeaturedProjects from './components/sections/FeaturedProjects';
import Portfolio from './components/sections/Portfolio';

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
