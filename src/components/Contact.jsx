import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Card,
  CardBody,
  Input,
  Textarea,
  Icon,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { useState } from "react";

function Contact() {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  console.log(values);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted form:", values);
    setValues({ fullname: "", email: "", message: "" }); // Clear form after submission
  };

  return (
    <Flex
      direction={"column"}
      bgColor={"#fff"}
      mx={"-12.5%"}
      px={"12.5%"}
      pb={"12%"}
    >
      <Heading fontWeight={600} size={"md"}>
        Contact
      </Heading>
      <Heading size={"3xl"} fontWeight={600}>
        Connect{" "}
        <Box color={"#003566"} display={"inline-block"}>
          With Me
        </Box>{" "}
        Now!
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" columnGap={5} mt={16}>
        <GridItem colSpan={1} as={FormControl} onSubmit={handleSubmit}>
          {/* Left column */}
          <GridItem h="84px">
            <Input
              h={"64px"}
              placeholder="Full Name"
              name="fullname"
              type="text"
              bgColor={`rgba(0, 53, 102, 0.1)`}
              _placeholder={{ fontWeight: "bold", color: "rgb(0, 53, 102)" }}
              borderRadius={10}
              value={values.fullname}
              onChange={handleChange}
            />
          </GridItem>
          <GridItem h="84px">
            <Input
              h={"64px"}
              placeholder="Email"
              name="email"
              type="email"
              bgColor={`rgba(0, 53, 102, 0.1)`}
              _placeholder={{ fontWeight: "bold", color: "#003566" }}
              value={values.email}
              onChange={handleChange}
            />
          </GridItem>
          <GridItem rowSpan={2} h="170px">
            <Textarea
              h={"80%"}
              placeholder="Message"
              name="message"
              type="text"
              bgColor={`rgba(0, 53, 102, 0.1)`}
              _placeholder={{ fontWeight: "bold", color: "#003566" }}
              value={values.message}
              onChange={handleChange}
            />
          </GridItem>
          <GridItem
            onClick={handleSubmit}
            as={Button}
            bgColor="#003566"
            color={"#fff"}
            type="submit"
            w={"100%"}
          >
            Contact Me
          </GridItem>
        </GridItem>
        <GridItem colSpan={1}>
          {/* h="100px" */}
          {/* Right column */}
          <GridItem h="84px">
            <Card as={GridItem}>
              <CardBody
                bgColor={`rgba(0, 53, 102, 0.1)`}
                // my={2}
                py={3}
                pl={3}
                borderRadius={10}
              >
                <Flex alignItems={"center"}>
                  <Icon
                    as={IoLocationOutline}
                    display={"inline-block"}
                    boxSize={10}
                    borderRadius={10}
                    bgColor={`rgba(0, 53, 102, 0.1)`}
                    p={2}
                    mr={4}
                  />
                  <Text
                    display={"inline-block"}
                    color={"#003566"}
                    fontWeight={600}
                  >
                    Hyderabad, PAKISTAN
                  </Text>
                </Flex>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem h="84px">
            <Card>
              <CardBody
                bgColor={`rgba(0, 53, 102, 0.1)`}
                // my={2}
                py={3}
                pl={3}
                borderRadius={10}
              >
                <Flex alignItems={"center"}>
                  <Icon
                    as={IoMailOutline}
                    display={"inline-block"}
                    boxSize={10}
                    borderRadius={10}
                    bgColor={`rgba(0, 53, 102, 0.1)`}
                    p={2}
                    mr={4}
                  />
                  <Text
                    display={"inline-block"}
                    color={"#003566"}
                    fontWeight={600}
                  >
                    muhammadharis0038@gmail.com
                  </Text>
                </Flex>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem h="84px">
            <Card>
              <CardBody
                bgColor={`rgba(0, 53, 102, 0.1)`}
                // my={2}
                py={3}
                pl={3}
                borderRadius={10}
              >
                <Flex alignItems={"center"}>
                  <Icon
                    display={"inline-block"}
                    as={FiPhoneCall}
                    boxSize={10}
                    borderRadius={10}
                    bgColor={`rgba(0, 53, 102, 0.15)`}
                    p={2}
                    mr={4}
                  />
                  <Text
                    display={"inline-block"}
                    color={"#003566"}
                    fontWeight={600}
                  >
                    +92 3213184523
                  </Text>
                </Flex>
              </CardBody>
            </Card>
          </GridItem>
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default Contact;
