import { Button, Flex, Box, Heading, Text, Icon } from "@chakra-ui/react";
import bgImage from "../assets/images/1609.m00.i125.n001.S.c12 5.jpg";

import { IoDiamondOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { LuPencilRuler } from "react-icons/lu";
function Specialties() {
  let Specialities = [
    {
      icon: LuPencilRuler,
      title: "UI Design",
      description:
        "Crafting visually appealing and intuitive interfaces that engage users and enhance brand identity",
    },
    {
      icon: LuLayoutDashboard,
      title: "Prototyping",
      description:
        "Proficiency with software like Sketch, Figma, Adobe XD, or InVision",
    },
    {
      icon: IoDiamondOutline,
      title: "UX Optimization",
      description:
        "Elevating user journeys by improving navigation, accessibility, and overall user satisfaction",
    },
  ];
  return (
    <Box height="480px" bgColor="green">
      <Flex
        position="absolute"
        left="0"
        width="calc(100vw - 20px)"
        // height="600px"
        objectFit="scale-down"
        bgImage={bgImage}
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Flex direction="row" paddingX="10%" marginY="40px">
          <Flex
            direction="column"
            flexWrap="wrap"
            justify="center"
            width="48%"
            height="25rem"
            // bgColor="powderblue"
          >
            {Specialities.map((item) => {
              return (
                <Box
                  key={item.title}
                  bgColor="whitesmoke"
                  paddingX="20px"
                  paddingTop="14px"
                  paddingBottom="30px"
                  borderRadius="16px"
                  margin="7.5px"
                  maxWidth="17.188rem"
                >
                  {<Icon as={item.icon} boxSize={8} color="#003566" />}
                  <Heading
                    as="h5"
                    fontSize="large"
                    fontWeight="600"
                    paddingBottom="4px"
                  >
                    {item.title}
                  </Heading>
                  <Text fontSize="small">{item.description}</Text>
                </Box>
              );
            })}
          </Flex>
          <Flex
            direction="column"
            justify="space-between"
            width="50%"
            paddingLeft="30px"
            // bgColor="gainsboro"
          >
            <Heading
              as="h6"
              fontWeight={400}
              fontSize="1.537rem"
              color="#003566"
            >
              My Specialties
            </Heading>
            <Heading as="h5" fontWeight={600} fontSize="4.243rem">
              Why Hire Me For Your{" "}
              <Box color="#003566" display="inline">
                Designs ?
              </Box>
            </Heading>
            <Text fontSize="1.194rem">
              Unlocking boundless creativity and innovation to craft compelling
              design solutions tailored to your unique vision.
            </Text>
            <Button
              width="10rem"
              paddingX="10px"
              variant="solid"
              bgColor="#003566"
              color="white"
            >
              Hire Me
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
export default Specialties;
