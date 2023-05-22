import React from 'react';
import { Input, Text, HStack, FormControl, FormLabel} from '@chakra-ui/react'
import  {Link}  from 'react-router-dom';

const LandingNavbar = () => {
return (
  <div>
    <HStack gridGap={10} px="8" py="2" boxShadow="base" >
      <FormControl>
        <FormLabel>
          <Input width="1/4" placeholder='Search' />
        </FormLabel>
      </FormControl>
      <Link to="/about" > 
          <Text fontSize="sm" color="gray.500">About Us</Text>
      </Link>
      <Link to="/contact" > 
          <Text fontSize="sm" color="gray.500">Contact Us</Text>
      </Link>
      <Link to="/login" > 
          <Text fontSize="sm" color="gray.500" border="blue">Login</Text>
      </Link>
    </HStack>
    
  </div>
)
    
};


export default LandingNavbar; 