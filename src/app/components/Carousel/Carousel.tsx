import Slider, { Settings } from "react-slick";
import { Box, Image } from '@chakra-ui/react';



const Carousel = () => {
  const Images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzkxMjU4Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      alt: "Image 1 ",
      title: "Web Design",
      description: " Coding",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1580894908361-967195033215?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTQ4MzY5OQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      alt: "Image 2",
      title: "This is Engineering",
      description: "Woman in Engineering",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTg1MDQyMA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      alt: "Image 3",
      title: "Pair Programming",
      description: "debug",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1630091003936-aea522c1e8c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MTM5Njk4NQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      alt: "Image 4",
      title: "vs code",
      description: "editor",
    },
  ];

  let sliderSettings: Settings = {
    infinite: true,
    dots: true,
    arrows: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    adaptiveHeight: true,
    centerMode: true,
  };

  return (
    <div className="">
      <Box boxSize='sm' w='100%'>
      <Slider {...sliderSettings}>
        {Images.map((item) => (
          <div key={item.id}>
            <Image
              src={item.src}
              alt={item.alt}
              objectFit='cover'
              maxW={{ base: '200%', lg: '500px' }}
            />
          </div>
        ))}
      </Slider>
      </Box>
    
    </div>
  );
};

export default Carousel;
