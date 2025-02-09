import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from './SamplesPage.module.scss';

export const metadata = {
  title: 'Фотографии стрижек парикмахерской Причесончик Сергиев Посад',
  description: 'примеры работ, фото, галерея',
};

const SamplesPage = () => {
  const SAMPLES_ITEM_IMG_WIDTH = 300;

  const samples = [
    { name: 'пример стрижки', imgSrc: '/sample-23.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-24.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-25.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-26.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-27.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-28.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-29.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-30.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-31.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-32.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-33.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-34.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-35.jpg' },
    { name: 'пример стрижки', imgSrc: '/services-item-img-girl.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-2.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-4.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-5.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-6.jpg' },
    { name: 'пример стрижки', imgSrc: '/sample-7.jpg' },
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
    { name: 'пример стрижки', imgSrc: '/sample-22.jpg' },
  ];

  return (
    <div className={styles.samplesPage}>
      <Head>
        <title>Примеры работ парикмахерской Причесончика</title>
        <meta name='description' content='Фотогалерея' key='desc' />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Фотогалерея</h1>
        <div className={styles.samplesContainer}>
          {samples.map(({ name, imgSrc }) => (
            <Image
              className={styles.servicesItemImage}
              // style={{
              //   width: '100%',
              //   height: 'auto',
              // }}
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
