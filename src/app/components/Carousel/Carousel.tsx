import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const Images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=455&q=80',
      alt: 'Image 1 ',
      title: 'Web Design',
      description: ' Coding',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1580894908361-967195033215?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      alt: 'Image 2',
      title: 'This is Engineering',
      description: 'Woman in Engineering',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1573165265437-f5e267bb3db6?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=869&amp;q=80 ',
      alt: 'Image 3',
      title: 'Pair Programming',
      description: 'debug',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      alt: 'Image 4',
      title: 'vs code',
      description: 'editor',
    },
  ];

  let sliderSettings: Settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
  };

  return (
    <div className=''>
      <Slider {...sliderSettings}>
        {Images.map((item) => (
          <div key={item.id}>
            <img
              src={item.src}
              alt={item.alt}
              className='img'
              style={{ maxHeight: '350px', width: '100%' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
