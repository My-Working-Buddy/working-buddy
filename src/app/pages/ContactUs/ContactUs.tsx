import React from "react";
import {
  Button,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Stack,
  InputGroup,
  InputLeftAddon,
  HStack,
  Textarea,
  Image,
} from "@chakra-ui/react";
import mwbCanva from "../../../assets/mwb-canva.jpg";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";


const ContactUs = () => {
  const [value, setValue] = React.useState('');
  

  // const handleSubmit = () => {
  //   console.log('heyeyeyeyhe')
  // };

  const handleClick = () => {
    console.log("waauuuzz")
  }

  return (
    <>
    <><Navbar/></>
    <div>
      <Stack direction="row">
        <FormControl px="10" py="5" isRequired >
          <Heading size="md">CONTACT US</Heading>

          <HStack py="5">
            <div>
              <FormLabel>First name</FormLabel>
              <Input width="1/2" placeholder="First name" />
            </div>
            <div>
              <FormLabel>Last name</FormLabel>
              <Input width="1/2" placeholder="Last name" />
            </div>
          </HStack>
          <Stack>
            <div>
              <FormLabel>Email</FormLabel>
              <Input w="1/2" type="email" py="5" />
            </div>
            <div>
              <FormLabel>Phone</FormLabel>

              <Stack spacing={4}>
                <InputGroup>
                  <InputLeftAddon children="+254" />
                  <Input
                    w="1/2"
                    type="phone"
                    borderLeftRadius="0"
                    placeholder="phone number" />
                </InputGroup>
              </Stack>
            </div>
            <div>
              <FormLabel>Comment or Message</FormLabel>
              <Textarea isRequired boxSize="xs" />
            </div>

            <div>
              <Button type="submit" colorScheme="teal" onClick={handleClick}>
                Submit
              </Button>
            </div>
          </Stack>
        </FormControl>
        <Image
          objectFit="none"
          maxW={{ base: "200%", lg: "500px" }}
          src={mwbCanva}
          alt="banner-logo" />
      </Stack>
    </div><Footer /></>
  );
};

export default ContactUs;
