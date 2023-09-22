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
  Image
} from "@chakra-ui/react";
import mwbCanva from "../../../assets/mwb-canva.jpg";


const ContactUs = () => {
  return (
    <div>
      <Stack direction="row">
      <FormControl px="10" py="5">
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
            <Input w="1/2" type="Email" py="5" />
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
                  placeholder="phone number"
                />
              </InputGroup>
            </Stack>
          </div>
          <div>
            <FormLabel>Comment or Message</FormLabel>
            <Textarea isRequired boxSize="xs" />
          </div>

          <div>
          <Button type="submit" colorScheme="teal">Submit</Button>
        </div>
        </Stack>
      
      </FormControl>
      <Image
          objectFit="none"
          maxW={{ base: "200%", lg: "500px" }}
          src={mwbCanva}
          alt="banner-logo"
        />
      </Stack>
  
 
    </div>
  );
};

export default ContactUs;
