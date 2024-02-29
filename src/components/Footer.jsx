import { Flex, Icon, IconButton, Stack, Text, Link } from "@chakra-ui/react";
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaRegCopyright,
} from "react-icons/fa6";
function Footer() {
  return (
    <Flex
      direction={"column"}
      justify={"center"}
      alignItems={"center"}
      my={"40px"}
    >
      <Stack
        direction={"row"}
        spacing={6}
        borderRadius={"30px"}
        bgColor={`rgba(0, 53, 102, 0.1)`}
        p={4}
      >
        <IconButton
          as={Link}
          href="https://www.x.com"
          isExternal
          icon={<FaXTwitter size={30}/>}
          _hover={{ cursor: "pointer" }}
          variant={"ghost"}
        />
        <IconButton
          as={Link}
          icon={<FaLinkedinIn color="rgba(25, 118, 210, 1)" size={30} />}
          isExternal
          href="https://pk.linkedin.com/"
          _hover={{ cursor: "pointer" }}
          variant={"ghost"}
        />
        <IconButton
          as={Link}
          href="https://www.instagram.com"
          isExternal
          icon={<FaInstagram color="pink" size={30} />}
          mr={2}
          _hover={{ cursor: "pointer" }}
          variant={"ghost"}
        />
      </Stack>
      <Stack direction={"row"} justify={"center"} alignItems={"center"} mt={3}>
        <Icon as={FaRegCopyright} size={40} mt={1} />
        <Text fontWeight={600}>2024 - Muhammad Haris</Text>
      </Stack>
    </Flex>
  );
}

export default Footer;
