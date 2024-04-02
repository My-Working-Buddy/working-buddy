import React from "react";
import {
  Button,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Stack,
  HStack,
  Textarea,
  Image,
  AspectRatio,
} from "@chakra-ui/react";
import mwbCanva from "../../../assets/mwb-canva.jpg";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const ContactUs = () => {
  return (
    <>
      <>
        <Navbar />
      </>
      <div>
        <Stack direction="row" spacing="8">
          <FormControl px="10" py="5" isRequired>
            <Heading size="md">CONTACT US</Heading>

            <HStack py="5">
              <div>
                <FormLabel>Name </FormLabel>
                <Input width="1/2" placeholder="Name" />
              </div>
            </HStack>
            <Stack>
              <div>
                <FormLabel>Email</FormLabel>
                <Input w="1/2" type="email" py="5" placeholder="Email" />
              </div>
              <div>
                <FormLabel>Comment or Message</FormLabel>
                <Textarea
                  isRequired
                  boxSize="xs"
                  placeholder="Add feedback, comments or messages"
                />
              </div>

              <div>
                <Button type="submit" colorScheme="teal">
                  Submit
                </Button>
              </div>
            </Stack>
          </FormControl>
          <AspectRatio minW="sm">
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "300px" }}
              src={mwbCanva}
              alt="banner-logo"
            />
          </AspectRatio>
        </Stack>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
