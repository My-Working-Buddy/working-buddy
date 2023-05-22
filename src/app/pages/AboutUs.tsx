import React from 'react';
import { Box, Button, Text, Heading } from "@chakra-ui/react";


function AboutUs () {
return (
    <div>
      <div className='px-5'>
        <Box maxW="32rem">
          <Heading px="5" py="5" fontSize="lg">About Your Working Buddy</Heading>   
        </Box>
        <Box>
          <Text px="5" fontSize="md">Find a learning partner from anywhere with a click of a button</Text>
        </Box>
        <Button >Join Us</Button>
      </div>
    </div>
)
}

export default AboutUs;