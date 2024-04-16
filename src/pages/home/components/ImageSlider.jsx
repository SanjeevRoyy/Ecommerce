import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Auto slide
    autoplaySpeed: 1000, // Time between slides in milliseconds (2 seconds)
  };

  return (
    <div className='slider'>
      
      <Slider {...settings}>
        <div>
          <img src="img/slider1.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="img/slider2.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="img/slider3.jpg" alt="Image 3" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;