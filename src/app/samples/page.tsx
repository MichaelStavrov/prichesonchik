import React from 'react';
import Image from 'next/image';
import styles from './SamplesPage.module.scss';

const SamplesPage = () => {
  const SAMPLES_ITEM_IMG_WIDTH = 300;

  const samples = [
    { name: 'пример стрижки', imgSrc: '/services-item-img-girl.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-2.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-4.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-5.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-6.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-7.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-8.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-9.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-10.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-11.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-12.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-13.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-14.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-15.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-16.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-17.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-18.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-19.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-20.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-21.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-3.jpg' },
  ];

  return (
    <div className={styles.samplesPage}>
      <div className={styles.container}>
        <h2 className={styles.title}>Фотогалерея</h2>
        <div className={styles.samplesContainer}>
          {samples.map(({ name, imgSrc }) => (
            <Image
              className={styles.servicesItemImage}
              key={imgSrc}
              src={imgSrc}
              alt={name}
              width={SAMPLES_ITEM_IMG_WIDTH}
              height={SAMPLES_ITEM_IMG_WIDTH / 0.75}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SamplesPage;
