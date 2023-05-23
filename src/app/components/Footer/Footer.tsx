import { ReactNode } from 'react';

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import mainLogo from '../../../assets/logo/mwb-logo.png';
import { useTranslation } from '../../../Locales';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2} color={'blue.500'}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box bg={'blue.900'} color={'white'}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <img src={mainLogo} alt='logo' />
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>{t('footer.service.headline')}</ListHeader>
            <Link href={'#'}>{t('footer.service.join')}</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>{t('footer.resources.headline')}</ListHeader>
            <Link href={'#'}>{t('footer.resources.blog')}</Link>
            <Link href={'#'}>{t('footer.resources.community')}</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>{t('footer.company.headline')}</ListHeader>
            <Link href={'#'}>{t('footer.company.about')}</Link>
            <Link href={'#'}>{t('footer.company.careers')}</Link>
            <Link href={'#'}>{t('footer.company.contacts')}</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>{t('footer.support.headline')}</ListHeader>
            <Link href={'#'}>{t('footer.support.help_center')}</Link>
            <Link href={'#'}>{t('footer.support.terms_of_service')}</Link>
            <Link href={'#'}>{t('footer.support.privacy_policy')}</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box borderTop={1} borderColor={'gray.600'} borderStyle={'solid'}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text fontSize={'sm'}>{t('footer.legal.rights_reserved')}</Text>
        </Container>
      </Box>
    </Box>
  );
};
