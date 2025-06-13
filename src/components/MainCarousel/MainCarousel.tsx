'use client';

import React from 'react';
import { Carousel } from 'antd';
import styles from './MainCarousel.module.scss';
import Image from 'next/image';

const MainCarousel = () => {
  const IMAGE_WIDTH = 320;
  const IMAGE_HEIGHT = IMAGE_WIDTH / 0.6;

  const carouselItems = [
    { src: '/carousel-main-img-7.jpg' },
    { src: '/dyeing-strands.jpg' },
    { src: '/best-photo.jpg' },
    { src: '/carousel-main-img-9.jpg' },
    { src: '/sample-19.jpg' },
    { src: '/carousel-main-img-12.jpg' },
    { src: '/carousel-main-img-13.jpg' },
    { src: '/carousel-main-img-14.jpg' },
    { src: '/carousel-main-img-15.jpg' },
    { src: '/sample-21.jpg' },
    { src: '/carousel-main-img-10.jpg' },
    { src: '/carousel-main-img-11.jpg' },
  ];

  return (
    <div className={styles.carousel} style={{ width: IMAGE_WIDTH + 100 }}>
      <Carousel arrows autoplay autoplaySpeed={3000} dots={false}>
        {carouselItems.map(({ src }) => (
          <Image
            className={styles.img}
            key={src}
            src={src}
            alt='образец стрижки'
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default MainCarousel;
