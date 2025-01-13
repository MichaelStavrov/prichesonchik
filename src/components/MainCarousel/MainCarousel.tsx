import React from 'react';
import { Carousel } from 'antd';
import styles from './MainCarousel.module.scss';
import Image from 'next/image';

const MainCarousel = () => {
  const IMAGE_WIDTH = 320;
  const IMAGE_HEIGHT = IMAGE_WIDTH / 0.6;

  const carouselItems = [
    { name: 'interior2', src: '/carousel-main-img-2.jpg' },
    { name: 'interior6', src: '/carousel-main-img-6.jpg' },
    { name: 'interior3', src: '/carousel-main-img-3.jpg' },
    { name: 'interior4', src: '/carousel-main-img-4.jpg' },
    { name: 'interior', src: '/carousel-main-img-1.jpg' },
    { name: 'interior5', src: '/carousel-main-img-5.jpg' },
    { name: 'interior7', src: '/carousel-main-img-7.jpg' },
  ];

  return (
    <div className={styles.carousel} style={{ width: IMAGE_WIDTH + 100 }}>
      <Carousel
        arrows
        autoplay
        autoplaySpeed={3000}
        adaptiveHeight
        draggable
        dots={false}
      >
        {carouselItems.map(({ name, src }) => (
          <Image
            className={styles.img}
            key={name}
            src={src}
            alt={name}
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default MainCarousel;
