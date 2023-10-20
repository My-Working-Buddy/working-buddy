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
import { useTranslation } from '../../../Locales';

export default function NewsLetter() {
  const { t } = useTranslation();

  return (
    <Flex
      align={'center'}
      justify={'center'}
      p={{ base: 5, lg: 20 }}
      bg={'blue.50'}
    >
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
          {t('newsletter.headline')}
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
              <Text color={'white'}> {t('newsletter.button.label')}</Text>
            </Button>
          </FormControl>
        </Stack>
      </Container>
    </Flex>
  );
}
