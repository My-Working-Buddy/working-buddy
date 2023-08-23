import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Container,
  Text,
  Flex,
} from '@chakra-ui/react';

export default function NewsLetter() {
  return (
    <Flex align={'center'} justify={'center'} p={20} bg={'blue.50'}>
      <Container
        maxW={'3xl'}
        bg={useColorModeValue('white', 'whiteAlpha.100')}
        boxShadow={'xl'}
        rounded={'lg'}
        p={10}
      >
        <Heading
          as={'h2'}
          fontSize={{ base: 'xl', sm: '2xl' }}
          textAlign={'center'}
          mb={5}
        >
          Subscribe to our Newsletter
        </Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          as={'form'}
          spacing={'12px'}
        >
          <FormControl>
            <Input
              variant={'solid'}
              borderWidth={1}
              color={'gray.800'}
              _placeholder={{
                color: 'gray.400',
              }}
              borderColor={useColorModeValue('gray.300', 'gray.700')}
              id={'email'}
              type={'email'}
              required
              placeholder={'Your Email'}
              aria-label={'Your Email'}
            />
          </FormControl>
          <FormControl w={{ base: '100%', md: '40%' }}>
            <Button w='100%' bg={'blue.900'}>
              <Text color={'white'}>Submit</Text>
            </Button>
          </FormControl>
        </Stack>
      </Container>
    </Flex>
  );
}

//TO-DO: Move the texts to translation
//TO-DO: Add test and stories
