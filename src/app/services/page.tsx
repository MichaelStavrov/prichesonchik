import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from './ServicesPage.module.scss';
import SimpleCard from '@/components/SimpleCard';
import { SERVICES_ID } from '../layout';

export const metadata = {
  title: 'Цены на услуги парикмахерской Причесончик Сергиев Посад',
  description: 'стоимость стрижек, услуги салона, стрижки недорого',
};

const ServicesPage = () => {
  const servicesGirls = [
    { name: 'Стрижка модельная', price: '700' },
    { name: 'Стрижка концов', price: '400' },
    { name: 'Стрижка чёлки', price: '150' },
    { name: 'Плетение кос', price: 'от 250' },
    { name: 'Прически', price: 'от 250' },
    { name: 'Окрашивание мелками', price: 'от 150' },
  ];

  const servicesBoys = [
    { name: 'Стрижка модельная', price: '700' },
    { name: 'Стрижка ножницами', price: '800' },
    { name: 'Стрижка машинкой', price: '450' },
    { name: 'Стрижка наголо', price: '300' },
    { name: 'Окантовка', price: '200' },
    { name: 'Мытье головы', price: '200' },
    { name: 'Художественный выстриг', price: '200' },
  ];

  const servicesMens = [
    { name: 'Стрижка модельная', price: '700' },
    { name: 'Стрижка ножницами', price: '650' },
    { name: 'Стрижка машинкой', price: '450' },
    { name: 'Стрижка наголо', price: '300' },
    { name: 'Окантовка', price: '200' },
    { name: 'Мытье головы', price: '200' },
    { name: 'Художественный выстриг', price: '200' },
  ];

  const servicesWomans = [
    { name: 'Стрижка модельная', price: '700' },
    { name: 'Стрижка концов', price: '500' },
    { name: 'Стрижка чёлки', price: '200' },
    { name: 'Плетение кос', price: '250' },
    { name: 'Прически', price: 'от 1550' },
    { name: 'Укладка волос', price: 'от 500' },
    { name: 'Укладка локоны', price: '700' },
    { name: 'Мытье головы', price: '200' },
  ];

  const coloring = [
    { name: 'Окрашивание в один тон', price: 'от 1400' },
    { name: 'Окрашивание со своей краской', price: 'от 1000' },
    { name: 'Окрашивание корней', price: 'от 1 400' },
    { name: 'Мелирование под фольгу', price: 'от 2500' },
    { name: 'Мелирование под шапочку', price: 'от 2 000' },
    { name: 'Контурное окрашивание', price: 'от 3000' },
    { name: 'Окрашивание - Прядки', price: 'от 1 000' },
    { name: 'Декапирование', price: 'от 5 000' },
    {
      name: 'Сложное окрашивание (AirTouch, Омбре, Шатуш, Балаяж)',
      price: 'от 5 000',
    },
  ];

  // const aquagrim = [
  //   {
  //     name: (
  //       <span className={styles.serviceBlockArticle}>
  //         <span>
  //           Отличный способ разнообразить праздник и поднять настроение!
  //         </span>
  //         <span>
  //           Рисунки, узоры, маски героев – подарят удивительную возможность
  //           каждому ребенку перевоплотиться и получить удовольствие от
  //           праздника.
  //         </span>
  //         <span>
  //           С красочным гримом радость будет бесконечной, а приключения –
  //           невероятными!
  //         </span>
  //       </span>
  //     ),
  //     price: 'от 300',
  //   },
  // ];

  // const manicure = [
  //   { name: 'Маникюр с покрытием гель-лаком, укрепление', price: 'от 1 900' },
  //   { name: 'Покрытие гель-лаком (без укрепления)', price: 'от 1 500' },
  //   { name: 'Аппаратный маникюр', price: 'от 700' },
  //   { name: 'Наращивание ногтей', price: 'от 2 300' },
  //   { name: 'Комбинированный маникюр', price: 'от 700' },
  //   { name: 'Дизайн ногтей', price: 'от 200' },
  //   { name: 'Рисунок на ногте', price: 'от 300' },
  //   { name: 'Необычная форма ногтей', price: 'от 2 700' },
  //   { name: 'Снятие чужой работы', price: 'от 300' },
  // ];

  const piercing = [
    {
      name: (
        <span className={styles.serviceBlockArticle}>
          <span>Прокол ушей детям и взрослым.</span>
          <span>
            Прокол осуществляется сертифицированной системой Studex R993.
            Инструмент гарантирует полную стерильность и качественный быстрый
            прокол.
          </span>
          <span>
            Оригинальный механизм позволяет раздвинуть ткани, обеспечивая
            минимальный дискомфорт и быстрое заживление.
          </span>
          <span>
            В стоимость прокола входят оригинальные серьги из гипоаллергенной
            нержавеющей стали. В подарок грамота за смелость!
          </span>
        </span>
      ),
      price: '2100',
    },
  ];

  const services = [
    {
      id: SERVICES_ID.GIRLS,
      items: servicesGirls,
      title: 'Девочки',
      imageSrc: '/services-item-img-girl.jpg',
    },
    {
      id: SERVICES_ID.BOYS,
      items: servicesBoys,
      title: 'Мальчики',
      imageSrc: '/services-item-img-boy.jpg',
    },
    {
      id: SERVICES_ID.MENS,
      items: servicesMens,
      title: 'Мужской зал',
      imageSrc: '/services-item-img-men.jpg',
    },
    {
      id: SERVICES_ID.WOMANS,
      items: servicesWomans,
      title: 'Женский зал',
      imageSrc: '/services-item-img-women.jpg',
    },
    {
      id: SERVICES_ID.COLORING,
      items: coloring,
      title: 'Окрашивание',
      imageSrc: '/stock-1.jpg',
    },
    {
      id: SERVICES_ID.PIERCING,
      items: piercing,
      title: 'Прокол ушей',
      imageSrc: '/services-item-img-piercing.jpg',
    },
    // {
    //   id: SERVICES_ID.AQUAGRIM,
    //   items: aquagrim,
    //   title: 'Аквагрим',
    //   imageSrc: '/services-item-img-aquagrim.jpg',
    // },
    // {
    //   id: SERVICES_ID.MANICURE,
    //   items: manicure,
    //   title: 'Маникюр',
    //   imageSrc: '/services-item-img-manicure.jpg',
    // },
  ];

  const SERVICES_ITEM_IMG_WIDTH = 200;

  return (
    <div className={styles.servicesPage}>
      <Head>
        <title>Цены и услуги парикмахерской Причесончик</title>
        <meta
          name='description'
          content='стоимость и цены на услуги салона красоты'
          key='desc'
        />
      </Head>
      <h1 className={styles.title}>Наши услуги и цены</h1>
      <div className={styles.servicesGrid}>
        {services.map(({ id, items, title, imageSrc }) => (
          <SimpleCard key={id} justifyContent='space-between'>
            <div className={styles.servicesItemBlock} id={id}>
              <h2 className={styles.servicesItemTitle}>{title}</h2>
              {['aquagrim', 'piercing'].includes(id) ? (
                <div>
                  {items.map(({ name, price }) => (
                    <div
                      className={styles.servicesItemContent}
                      key={name.toString()}
                    >
                      <div
                        className={styles.servicesItemContentColoringLeftBlock}
                      >
                        <p>{name}</p>
                        <span>{price} &#8381;</span>
                      </div>
                      <Image
                        className={styles.servicesItemImage}
                        src={imageSrc}
                        alt={title}
                        width={SERVICES_ITEM_IMG_WIDTH}
                        height={SERVICES_ITEM_IMG_WIDTH / 0.75}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className={styles.servicesItemContent}>
                  <div className={styles.servicesItemContentContainer}>
                    {items.map(({ name, price }) => (
                      <div
                        key={name.toString()}
                        className={styles.servicesItemRow}
                      >
                        <span>{name}</span>
                        <span className={styles.servicesItemPrice}>
                          {price} &#8381;
                        </span>
                      </div>
                    ))}
                  </div>
                  <Image
                    className={styles.servicesItemImage}
                    src={imageSrc}
                    alt={title}
                    width={SERVICES_ITEM_IMG_WIDTH}
                    height={SERVICES_ITEM_IMG_WIDTH / 0.75}
                  />
                </div>
              )}
            </div>
          </SimpleCard>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
