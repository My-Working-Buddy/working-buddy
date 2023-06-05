import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Heading
} from '@chakra-ui/react'

const Login = () => {
  return (
    <div>
      <div>
        <Heading>Login</Heading>
        <FormControl py="2">
          <FormLabel>Email address</FormLabel>
            <Input width="1/2" type='email' />
          <FormLabel>Password</FormLabel>
            <Input width="1/2" type='password' />
        </FormControl>
      </div>
    </div>
  );
}
export default Login;
