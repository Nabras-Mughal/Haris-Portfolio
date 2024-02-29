import { Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import Home from "./components/Home";
import Stats from "./components/Stats";
import Specialties from "./components/Specialities";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Flex
      position="relative"
      direction="column"
      bgColor="gainsboro"
      paddingX="10%"
    >
      <Header />
      <Home />
      <Stats />
      <Specialties />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </Flex>
  );
}

export default App;
{
  /* <Button>Resume</Button> */
}
