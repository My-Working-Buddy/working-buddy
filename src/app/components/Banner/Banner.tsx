import { useTranslation } from '../../../Locales';
import mwbCanva from '../../../assets/mwb-canva.jpg';
import { Text, Image, Heading, Card, CardBody, Stack } from '@chakra-ui/react';

export const BannerText = () => {
  const { t } = useTranslation();

  return (
    <div className=''>
      <Heading>MWB</Heading>
      <Text paddingTop={4} whiteSpace={'pre-line'}>
        {t('banner.description')}
      </Text>
    </div>
  );
};
const Banner = () => {
  return (
    <div className='max-w'>
      <Card
        padding={{ lg: 20 }}
        direction={{ base: 'column', lg: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Stack>
          <CardBody minW='3/4'>
            <BannerText />
          </CardBody>
        </Stack>
        <Image
          objectFit='cover'
          maxW={{ base: '200%', lg: '500px' }}
          src={mwbCanva}
          alt='banner-logo'
        />
      </Card>
    </div>
  );
};

export default Banner;
