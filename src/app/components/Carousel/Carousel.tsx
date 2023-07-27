import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const Images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      alt: "Image 1",
      title: "Lamborghini Huracan Performante",
      description:
        "The Huracán",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      alt: "Image 2 ",
      title: "Porsche 911 Turbo S",
      description:
        " Fast Car",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      alt: "Image 3",
      title: "Ford Mustang",
      description: "For offroad lovers.",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80",
      alt: "Image 4",
      title: "Lamborghini Aventador SV",
      description:
        "provide thrills unlike anything that has ever been experienced before.",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      alt: "Image 5",
      title: "Ferrari 458 Speciale",
      description:
        "0 to 100 km/h (0 to 62 mph) takes 3.0 seconds",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1471479917193-f00955256257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
      alt: "Image 6",
      title: "Porsche 911",
      description:
        "The Porsche 911 is a two-door 2+2 high performance sports car.",
    },
  ];

  interface SliderSettings {
    infinite: true;
    speed: number;
    autoplay: true;
    autoplaySpeed: number;
    slidesToShow: number;
    slidesToScroll: number;
    lazyLoad: true;
    fade: true;
    arrows: false;
  }

  let sliderSettings: SliderSettings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    fade: true,
    arrows: false,
  };

  return (
    <div>
      <Slider {...sliderSettings}>
        {Images.map((item) => (
          <div key={item.id}>
            <img
              src={item.src}
              alt={item.alt}
              className="img"
              style={{ maxHeight: "576px", width: "50%" }}
            />
            <h2 className="title">{item.title}</h2>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
