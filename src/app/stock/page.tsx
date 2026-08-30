import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import SimpleCard from '@/components/SimpleCard';
import styles from './StockPage.module.scss';

export const metadata = {
  title: 'Акции парикмахерской Причесончик Сергиев Посад',
  description: 'актуальные предложения, акции на стрижки, акции на окрашивание',
};

const StockPage = () => {
  const IMAGE_WIDTH = 200;
  const IMAGE_HEIGHT = IMAGE_WIDTH / 0.7;

  const stockItems = [
    {
      name: 'Пенсионерам на стрижки скидка до 50%!',
      img: '/stock-4.jpg',
      desc: (
        <div>
          <p>
            Мы заботимся о вас и предлагаем качественные стрижки по доступной
            цене. Обновите свой стиль и почувствуйте себя прекрасно с новой
            прической. Не упустите возможность порадовать себя!
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className={styles.stockPage} id='stock-page'>
      <Head>
        <title>Акции салона Причесончик</title>
        <meta
          name='description'
          content='акции, скидки, предложения, выгодная стрижка'
          key='desc'
        />
        <link rel='icon' href='/favicon-32x32.png' />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Наши текущие акции</h1>
        <div className={styles.stockList}>
          {stockItems.map(({ name, img, desc }) => (
            <SimpleCard key={name}>
              <div className={styles.stockItem}>
                <span className={styles.stockTitleMob}>{name}</span>
                <Image
                  className={styles.stockImage}
                  src={img}
                  alt=''
                  width={IMAGE_WIDTH}
                  height={IMAGE_HEIGHT}
                />
                <div className={styles.stockContent}>
                  <span className={styles.stockTitle}>{name}</span>
                  {desc}
                </div>
              </div>
            </SimpleCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockPage;
