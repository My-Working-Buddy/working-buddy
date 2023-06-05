import React from 'react';
import {
  FormControl,
  FormLabel,
  Input, 
  Text
} from '@chakra-ui/react'

const SignUp = () => {
  return (
    <div>
      <div>
      <Text>Are you new here? Please sign Up</Text>

        <FormControl py="2">
          <FormLabel>Email address</FormLabel>
            <Input width="1/2" type='email' />
            <FormLabel> Confirm Email address</FormLabel>
            <Input width="1/2" type='email' />
          <FormLabel>Password</FormLabel>
            <Input width="1/2" type='password' />
            <FormLabel> Confirm Password</FormLabel>
            <Input width="1/2" type='password' />
        </FormControl>
      </div>
    </div>
  );
}
export default SignUp;
