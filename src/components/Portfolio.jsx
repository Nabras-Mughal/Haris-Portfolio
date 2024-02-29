import {
  Flex,
  Heading,
  Box,
  Button,
  Text,
  Image,
  Stack,
  Icon,
  IconButton,
  SlideFade,
  Img,
} from "@chakra-ui/react";

import imgOne from "../assets/images/LinkedIn (1).jpg";
import ImgTwo from "../assets/images/LinkedIn (6).jpg";
import ImgThree from "../assets/images/LinkedIn (7).jpg";
import ImgFour from "../assets/images/LinkedIn (8).jpg";
import ImgFive from "../assets/images/LinkedIn (9).jpg";
import ImgSix from "../assets/images/LinkedIn (10).jpg";
import ImgSeven from "../assets/images/LinkedIn (11).jpg";
import ImgEight from "../assets/images/LinkedIn (12).jpg";
import ImgNinth from "../assets/images/LinkedIn (13).jpg";
import ImgTenth from "../assets/images/LinkedIn (14).jpg";
import { useState } from "react";
import { LuMoveRight, LuMoveLeft } from "react-icons/lu";

function Portfolio() {
  const initialSliderState = {
    currentIndex: 0,
    images: [
      imgOne,
      ImgTwo,
      ImgThree,
      ImgFour,
      ImgFive,
      ImgSix,
      ImgSeven,
      ImgEight,
      ImgNinth,
      ImgTenth,
    ],
  };
  const [sliderHandle, setSliderHandle] = useState(initialSliderState);
  console.log(sliderHandle);
  const handleNext = () => {
    setSliderHandle((prevState) => ({
      ...prevState,
      currentIndex: (prevState.currentIndex + 1) % prevState.images.length,
    }));
  };

  const handlePrevious = () => {
    setSliderHandle((prevState) => ({
      ...prevState,
      currentIndex:
        prevState.currentIndex === 0
          ? prevState.images.length - 1
          : prevState.currentIndex - 1,
    }));
  };

  console.log(sliderHandle < 0);

  const rightSideHandler = () => {
    // if (portfoliImages.length >= 10) {
    //   setSliderHandle(0);
    // }
    setSliderHandle((prevState) => prevState + 1);
  };

  const leftSideHandler = () => {
    if (sliderHandle < 0) {
      setSliderHandle(portfoliImages.length);
      console.log(sliderHandle);
    }
    setSliderHandle((prevState) => prevState - 1);
  };

  return (
    <Flex marginY="100px">
      <Flex
        // position="absolute"
        direction="column"
        justify="space-between"
        width="50%"
        paddingLeft="30px"
        paddingRight="30px"
      >
        <Heading as="h6" fontWeight={400} fontSize="1.537rem" color="#003566">
          Portfolio
        </Heading>
        <Heading as="h5" fontWeight={600} fontSize="4.243rem">
          Latest
          <Box color="#003566" display="inline">
            {" "}
            Projects
          </Box>{" "}
          That I've Done
        </Heading>{" "}
        <Text fontSize="1.194rem" textAlign="justify">
          Explore a curated collection of my design projects, each a testament
          to my dedication to creating captivating and user-eccentric digital
          experiences
        </Text>
        <Button
          width="10rem"
          paddingX="10px"
          variant="solid"
          bgColor="#003566"
          color="white"
        >
          Get Notified
        </Button>
      </Flex>
      <Flex width="50%" direction="column">
        <Image
          src={sliderHandle.images[sliderHandle.currentIndex]}
          bgSize="cover"
          bgPosition="center"
          width="full"
          height="full"
          borderRadius="15px"
          alt="portfolio Images"
        />
        <Stack direction="row" marginTop="10px">
          <Icon
            as={LuMoveLeft}
            onClick={handlePrevious}
            _hover={{ cursor: "pointer" }}
          />
          <Icon
            as={LuMoveRight}
            color="#003566"
            onClick={handleNext}
            _hover={{ cursor: "pointer" }}
          />
        </Stack>
      </Flex>
    </Flex>
  );
}

export default Portfolio;
