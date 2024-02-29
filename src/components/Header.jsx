import { Flex, Heading, Box, Image, Link, Button } from "@chakra-ui/react";
import Logo from "../assets/images/Group 55.jpg";

function Header() {
  return (
    <Flex
      //   bgColor="firebrick"
      // position="sticky"
      // top="0"
      width="100%"
      justify="space-between"
      align="center"
      paddingTop="15px"
    >
      <Image boxSize="60px" src={Logo} borderRadius="7.5px" />
      <Flex width="50%" justify="space-evenly" align="center">
        <Link>Home</Link>
        <Link>Specialties</Link>
        <Link>Portfolio</Link>
        <Link>Testimonial</Link>
        <Link>Contact</Link>
      </Flex>
      <Button colorScheme="teal" variant="outline">
        Resume
      </Button>
    </Flex>
  );
}

export default Header;

// paddingY="10px"
{
  /* <Heading>Haris</Heading> */
}
