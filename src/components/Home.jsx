import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  Box,
  calc,
} from "@chakra-ui/react";
import mainPicture from "../assets/images/Profile PIC (1) 2.jpg";
import { ArrowDownIcon } from "@chakra-ui/icons";

function Home() {
  return (
    <Flex
      direction="row"
      justify="space-between"
      height="calc(100vh - 75px)"
      paddingTop="7.5%"
      marginBottom="30px"
    >
      <Flex
        maxWidth="60%"
        direction="column"
        justify="space-between"
        height="60%"
      >
        <Heading
          as="h5"
          size="sm"
          fontSize="1.537rem"
          fontWeight={500}
          color="#003566"
        >
          Hello There,
        </Heading>
        <Heading fontWeight={500} fontSize="4.243rem">
          I'm Elevating{" "}
          <Box
            display="inline"
            fontWeight={500}
            fontSize="4.243rem"
            color="#003566"
          >
            UI/UX
          </Box>{" "}
          Designer
        </Heading>
        <Text fontWeight={400} fontSize="1.194rem" color="#585858">
          I'm Muhammad Haris a UI/UX designer with an eye for innovation,
          transitioning to full-stack development to fuse design with
          functionality
        </Text>
        <Stack direction={"row"} spacing="24px">
          <Button
            bgColor="#003566"
            paddingX="30px"
            _hover={{ bgColor: "#003566", color: "gray" }}
            color="#fff"
            variant="solid"
          >
            Contact Me
          </Button>
          <Button variant="ghost" rightIcon={<ArrowDownIcon />}>
            View Portfolio
          </Button>
        </Stack>
      </Flex>
      <Flex>
        <Box
          bgImage="url('/images/gaara.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
        ></Box>
        <Image boxSize="sm" src={mainPicture} alt="main picture" />
      </Flex>
    </Flex>
  );
}

export default Home;
