import React from 'react';
import { Box, Text, Heading } from "@chakra-ui/react";


const Blog = () => {
return (
    <div>
      <div>
        <Box maxW="32rem">
          <Heading px="5" py="5" fontSize="lg">Read some of our content </Heading>
        </Box>
        <Box>
          <Text px="5" fontSize="md">article links </Text>
        </Box>
      </div>
    </div>
)
}

export default Blog;