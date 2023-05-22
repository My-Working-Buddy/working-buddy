import React from 'react';
import { Input, Text, HStack, FormControl, FormLabel} from '@chakra-ui/react'
import  {Link}  from 'react-router-dom';
import { InfoIcon, PhoneIcon, UnlockIcon } from '@chakra-ui/icons'

const LandingNavbar = () => {
return (
  <div>
    <HStack gridGap={10} px="8" py="2" boxShadow="base">
      <FormControl>
        <FormLabel>
          <Input width="1/4" placeholder='Search' />
        </FormLabel>
      </FormControl>
      <Link to="/about" > 
        <InfoIcon/>     
          <Text fontSize="sm">About Us</Text>
      </Link>
      <Link to="/contact" > 
        <PhoneIcon/>     
          <Text fontSize="sm">Contact Us</Text>
      </Link>
      <Link to="/login" > 
        <UnlockIcon/>     
          <Text fontSize="sm">Login</Text>
      </Link>
    </HStack>
    
  </div>
)
    
};


export default LandingNavbar; 