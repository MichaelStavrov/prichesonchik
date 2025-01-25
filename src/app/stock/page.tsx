import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import SimpleCard from '@/components/SimpleCard';
import styles from './StockPage.module.scss';

const StockPage = () => {
  const IMAGE_WIDTH = 200;
  const IMAGE_HEIGHT = IMAGE_WIDTH / 0.7;

  const stockItems = [
    {
      name: 'Выгодное окрашивание за 600 рублей',
      img: '/stock-3.jpg',
      desc: (
        <div className={styles.stockItemDesc}>
          <p>Окрашивание в один тон вашей краской по цене 600 рублей!</p>
          <p>
            Хватит мучаться в домашней ванной, пытаясь покраситься
            самостоятельно. Потом болят руки, вокруг следы краски. А еще
            неровный окрас пятнами, непрокрашенные участки волос, ведь самой
            просто физически невозможно контролировать прокрас сзади.
          </p>
          <p>
            Приходите к нам, и в приятной обстановке наши мастера покрасят
            идеально ровно и качественно всего за 600 рублей.
          </p>
        </div>
      ),
    },
    {
      name: 'Пенсионерам стрижки за 300 рублей!',
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
    {
      name: 'Укладка в подарок при окрашивании волос',
      img: '/stock-1.jpg',
      desc: (
        <div className={styles.stockItemDesc}>
          <p>
            Запишитесь на окрашивание волос и получите укладку в подарок!
            Преобразите свой образ с помощью профессиональной окраски и
            наслаждайтесь стильной укладкой, которая подчеркнёт вашу красоту! Не
            упустите возможность выглядеть великолепно.
          </p>

          <p>
            Подчеркните свою индивидуальность с доминирующим цветом и стильной
            укладкой от наших профессионалов. Вы заслуживаете выглядеть и
            чувствовать себя прекрасно!
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
        <h1 className={styles.title}>Наши акции</h1>
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
