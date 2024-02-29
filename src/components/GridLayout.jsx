import { Grid, GridItem, Box, Heading, Text, Button } from "@chakra-ui/react";

function MyGridLayout() {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
      <GridItem colSpan={1}>
        {" "}
        {/* Left column */}
        <GridItem h="100px">
          {" "}
          {/* First row */}
          <Heading>Row 1 - Left Column</Heading>
        </GridItem>
        <GridItem h="100px">
          {" "}
          {/* Second row */}
          <Text>Row 2 - Left Column</Text>
        </GridItem>
        <GridItem rowSpan={2} h="200px">
          {" "}
          {/* Third row, spanning two rows */}
          <Box bg="gray.200" p={4}>
            Content for third row - Left Column
          </Box>
        </GridItem>
        <GridItem>
          {" "}
          {/* Fourth row */}
          <Button colorScheme="blue">Left Column Button</Button>
        </GridItem>
      </GridItem>
      <GridItem colSpan={1}>
        {" "}
        {/* Right column */}
        <GridItem h="100px">
          {" "}
          {/* First row, same as left column */}
          <Heading>Row 1 - Right Column</Heading>
        </GridItem>
        <GridItem h="100px">
          {" "}
          {/* Second row, same as left column */}
          <Text>Row 2 - Right Column</Text>
        </GridItem>
        <GridItem h="100px">
          {" "}
          {/* Third row, different from left column */}
          <Box bg="blue.200" p={4}>
            Content for third row - Right Column
          </Box>
        </GridItem>
        <GridItem h="100px">
          {" "}
          {/* Fourth row */}
          <Button colorScheme="teal">Right Column Button</Button>
        </GridItem>
      </GridItem>
    </Grid>
  );
}

export default MyGridLayout;
