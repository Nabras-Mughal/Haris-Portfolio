import { Flex, Spacer, Heading, Stack } from "@chakra-ui/react";

function Stats() {
  return (
    <Flex width="100%" flexBasis="1" justify="space-between">
      <Stack
        width="33.3%"
        padding="40px 50px"
        paddingBottom="10px"
        borderRight="4px solid #003566"
      >
        <Heading color="#003566" textAlign="left" fontSize="5xl">
          23+
        </Heading>
        <Heading>Web Designs</Heading>
      </Stack>

      <Stack
        // bgColor="gainsboro"
        width="33.3%"
        padding="40px 50px"
        paddingBottom="10px"
      >
        <Heading color="#003566" textAlign="left" fontSize="5xl">
          12+
        </Heading>
        <Heading>App Design</Heading>
      </Stack>
      <Stack
        borderLeft="4px solid #003566"
        width="33.3%"
        padding="40px 50px"
        paddingBottom="10px"
        // paddingX="50px"
      >
        <Heading color="#003566" textAlign="left" fontSize="5xl">
          5+
        </Heading>
        <Heading>Dashboard Designs</Heading>
      </Stack>
    </Flex>
  );
}

export default Stats;
