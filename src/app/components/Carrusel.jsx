"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'https://www.jobint.com/wp-content/uploads/2022/06/grupo-piero-320x202.png',
  'https://www.jobint.com/wp-content/uploads/2022/06/suavestar-320x202.png',
  'https://www.jobint.com/wp-content/uploads/2022/06/piero-1-320x202.png',
  'https://www.jobint.com/wp-content/uploads/2022/06/lbdo-1-320x202.png',
  'https://www.jobint.com/wp-content/uploads/2022/06/gani-320x202.png',
  'https://www.jobint.com/wp-content/uploads/2022/06/femsa-1-320x202.png',
  'https://www.jobint.com/wp-content/uploads/2022/06/cannon-1-320x202.png',
  'https://www.jobint.com/wp-content/uploads/2022/06/bbva-2-320x202.png',
  'https://www.jobint.com/wp-content/uploads/2022/06/verisure-1-320x202.png',
  'https://www.jobint.com/wp-content/uploads/2022/06/prisma-1-320x202.png',
  'https://www.jobint.com/wp-content/uploads/2022/06/tiimiit-320x202.png'
];

const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 6,
  slidesToScroll: 6,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const Carrusel = () => {
  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} >
          <img src={image} alt={`Image ${index}`} style={{ width: 250, height: 150 }} />
        </div>
      ))}
    </Slider>
  );
};

export default Carrusel;
