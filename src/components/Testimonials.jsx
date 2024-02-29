import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";

import AyanImg from "../assets/images/cards/1687516311190 2.jpg"; // true //
import AtiqueImg from "../assets/images/cards/1633725087481 1.jpg"; // true //
import MustafaImg from "../assets/images/cards/1688937757185 1.png"; // true //
import SaribImg from "../assets/images/1698598412913.jpg"; // true //
import AqibImg from "../assets/images/1629290783584.png"; // true //
// import ZaidImg from "../assets/images/1705474959174.png"; // Not found //
// import TabishImg from "../assets/images/1701295643111.png"; //Not found //

import bgImage from "../assets/images/1609.m00.i125.n001.S.c12 5.jpg";
import { useState } from "react";
import { LuMoveRight, LuMoveLeft } from "react-icons/lu";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: "Ayan Shaikh",
      designation: "Graphic Designer",
      rating: 5,
      review:
        "Working with Muhammad Haris was an absolute pleasure! Their attention to detail in UI/UX design is outstanding. They turned our vision into a beautiful, user-friendly reality. We highly recommend their services!",
      img: AyanImg,
    },
    {
      id: 2,
      name: "Atique Ur Rehman",
      designation: "Full Stack Developer",
      rating: 5,
      review:
        "Muhammad Haris is a true professional in the field of UI/UX design. They went above and beyond to understand our unique requirements and delivered a top-notch product. We're thrilled with the results!",
      img: AtiqueImg,
    },
    {
      id: 3,
      name: "Mustafa Shaikh",
      designation: "Full Stack Developer",
      rating: 5,
      review:
        "I can't thank Muhammad Haris enough for their exceptional design work. They have an incredible talent for making complex interfaces feel intuitive. Our users are raving about the improved experience!    ",
      img: MustafaImg,
    },
    {
      id: 4,
      name: "Muhammad Sarib",
      designation: "React Developer",
      rating: 5,
      review:
        "Muhammad Haris excels as a UI/UX design professional. He meticulously grasped our unique requirements and delivered a superior product. His dedication and expertise left us thoroughly impressed with the final outcome!",
      img: SaribImg,
    },
    {
      id: 5,
      name: "Aqib Rajput",
      designation: "React Developer",
      rating: 4,
      review:
        "Muhammad Haris's expertise in UI/UX design truly shines. He went above and beyond to understand our needs and delivered an exceptional product. We couldn't be happier with the results!",
      img: AqibImg,
    },
    {
      id: 6,
      name: "Syed Zaid Ahmed",
      designation: "React Developer",
      rating: 5,
      review:
        "Muhammad Haris's professionalism in UI/UX design is unmatched. He took the time to understand our specific requirements and delivered a top-notch product that exceeded our expectations. We're glad to work with Haris",
      img: SaribImg,
    },
    {
      id: 7,
      name: "Tabish Shaikh",
      designation: "Python Developer",
      review:
        "Muhammad Haris stands out as a true expert in UI/UX design. His commitment to understanding our unique vision resulted in a stellar product that exceeded our expectations. We're extremely satisfied with the exceptional quality of his work!",
      rating: 4,
      img: AqibImg,
    },
  ];
  //   const initialSliderState = {
  //     currentIndex: 0,
  //     images: [
  //       imgOne,
  //       ImgTwo,
  //       ImgThree,
  //       ImgFour,
  //       ImgFive,
  //       ImgSix,
  //       ImgSeven,
  //       ImgEight,
  //       ImgNinth,
  //       ImgTenth,
  //     ],
  //   };
  //   const [sliderHandle, setSliderHandle] = useState(initialSliderState);
  // console.log(sliderHandle);
  const handleNext = () => {
    if (activeIndex < testimonials.length - 1) {
      setActiveIndex((prevState) =>
        Math.min(prevState + 1, testimonials.length - 1)
      );
      setTranslateX((prevState) => prevState - 530);
    } else {
      setActiveIndex(0);
      setTranslateX(0);
    }

    console.log(activeIndex, setTranslateX);

    // const newLocal = setSliderHandle((prevState) => ({
    //   ...prevState,
    //   currentIndex: (prevState.currentIndex + 1) % prevState.images.length,
    // }));
  };

  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevState) => Math.max(prevState - 1, 0));
      setTranslateX((prevState) => prevState + 530);
    }

    console.log(`Clicked on Prev Btn`);
    // setSliderHandle((prevState) => ({
    //   ...prevState,
    //   currentIndex:
    //     prevState.currentIndex === 0
    //       ? prevState.images.length - 1
    //       : prevState.currentIndex - 1,
    // }));
  };

  return (
    <Flex
      direction="column"
      objectFit="scale-down"
      bgImage={bgImage}
      bgPosition="center"
      bgRepeat="no-repeat"
      py={"25px"}
      mx={"-12.5%"}
      px={"12.5%"}
    >
      <Flex justify={"space-between"} mb={"10px"}>
        <Flex
          direction="column"
          justify="space-between"
          width="50%"
          paddingLeft="30px"
          paddingRight="30px"
        >
          <Heading as="h6" fontWeight={600} fontSize="1.737rem" color="#003566">
            Testimonials,
          </Heading>
          <Heading as="h5" fontWeight={600} fontSize="4.243rem">
            What
            <Box color="#003566" display="inline">
              {" "}
              People Say
            </Box>{" "}
            About Me
          </Heading>
        </Flex>
        <Stack direction="row" alignSelf={"flex-end"} mb={"10px"}>
          <Icon
            as={LuMoveLeft}
            onClick={handlePrevious}
            _hover={{ cursor: "pointer" }}
          />
          <Icon
            as={LuMoveRight}
            color="#003566"
            onClick={handleNext}
            // _disabled={activeIndex === 4}
            _hover={{ cursor: "pointer" }}
          />
        </Stack>
      </Flex>
      <Flex mr={"-12.5%"} overflowX={"hidden"}>
        <Flex
          direction={"row"}
          width={`calc(530px * ${testimonials.length})`}
          transition={`transform 0.3s ease-in-out`}
          transform={`translateX(${translateX}px)`}
          // bgColor={"firebrick"}
          mr={"-12.5%"}
          mb={"40px"}
        >
          {testimonials.map((_) => {
            return (
              <Card key={_.id} m={2} p={2} minWidth={"530px"}>
                <CardHeader pb={3}>
                  <Stack direction={"row"}>
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </Stack>
                </CardHeader>
                <CardBody py={0}>{_.review}</CardBody>
                <CardFooter py={3}>
                  <Flex>
                    <Image boxSize={50} src={_.img} />
                    <Stack ml={2}>
                      <Heading size={"md"}>{_.name}</Heading>
                      <Text mt={-1} fontSize={"small"}>
                        {_.designation}
                      </Text>
                    </Stack>
                  </Flex>
                </CardFooter>
              </Card>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Testimonials;

// marginY="100px" //
{
  /* width="50%" direction="column" */
}

//   <Image
//   src={sliderHandle.images[sliderHandle.currentIndex]}
//   bgSize="cover"
//   bgPosition="center"
//   width="full"
//   height="full"
//   borderRadius="15px"
//   alt="portfolio Images"
// />
// <Stack direction="row" marginTop="10px">
//   <Icon as={LuMoveLeft} onClick={handlePrevious} />
//   <Icon as={LuMoveRight} color="#003566" onClick={handleNext} />
// </Stack>

// display={"inline-block"}
{
  /* flexWrap={"wrap"} */
}
