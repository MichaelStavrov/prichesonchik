import React, { ReactNode } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from './ServicesPage.module.scss';
import SimpleCard from '@/components/SimpleCard';
import { SERVICES_ID } from '../layout';

export const metadata = {
  title: 'Цены на услуги парикмахерской Причесончик Сергиев Посад',
  description: 'стоимость стрижек, услуги салона, стрижки недорого',
};

interface ServicesItems {
  name: ReactNode;
  price: string;
}

interface Services {
  id: SERVICES_ID;
  items: ServicesItems[];
  title: string;
  imageSrc: string;
  description?: ReactNode;
}

const ServicesPage = () => {
  const servicesGirls: ServicesItems[] = [
    { name: 'Стрижка модельная', price: 'от 800' },
    { name: 'Стрижка концов', price: 'от 600' },
    { name: 'Стрижка чёлки', price: 'от 300' },
    { name: 'Плетение кос', price: 'от 700' },
    { name: 'Прически', price: 'от 700' },
  ];

  const servicesBoys: ServicesItems[] = [
    { name: 'Стрижка модельная', price: 'от 800' },
    { name: 'Стрижка машинкой', price: 'от 600' },
    { name: 'Стрижка наголо', price: 'от 400' },
    { name: 'Окантовка', price: 'от 300' },
    { name: 'Мытье головы', price: 'от 300' },
    { name: 'Художественный выстриг', price: 'от 300' },
  ];

  const servicesMens: ServicesItems[] = [
    { name: 'Стрижка модельная', price: 'от 800' },
    { name: 'Стрижка машинкой', price: 'от 600' },
    { name: 'Стрижка наголо', price: 'от 400' },
    { name: 'Окантовка', price: 'от 300' },
    { name: 'Мытье головы', price: 'от 300' },
    { name: 'Художественный выстриг', price: 'от 300' },
  ];

  const servicesWomans: ServicesItems[] = [
    { name: 'Стрижка модельная', price: 'от 800' },
    { name: 'Стрижка концов', price: 'от 600' },
    { name: 'Стрижка чёлки', price: 'от 300' },
    { name: 'Плетение кос', price: 'от 700' },
    { name: 'Прически', price: 'от 1 700' },
    { name: 'Укладка волос', price: 'от 1 300' },
    { name: 'Укладка локоны', price: 'от 1 000' },
    { name: 'Мытье головы', price: 'от 300' },
  ];

  const coloring: ServicesItems[] = [
    { name: 'Окрашивание в один тон', price: 'от 1 700' },
    { name: 'Окрашивание со своей краской', price: 'от 1 300' },
    { name: 'Окрашивание корней', price: 'от 1 700' },
    { name: 'Мелирование под фольгу', price: 'от 3 000' },
    { name: 'Мелирование под шапочку', price: 'от 2 500' },
    { name: 'Контурное окрашивание', price: 'от 4 000' },
    { name: 'Окрашивание - Прядки', price: 'от 1 200' },
    { name: 'Декапирование', price: 'от 6 000' },
    {
      name: 'Сложное окрашивание (AirTouch, Омбре, Шатуш, Балаяж)',
      price: 'от 6 000',
    },
  ];

  const piercing: ServicesItems[] = [
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
          <b>По предварительной записи!</b>
        </span>
      ),
      price: '2 300',
    },
  ];

  // const brows: ServicesItems[] = [
  //   { name: 'Ламинирование бровей - полный комплекс', price: '2 100' },
  //   { name: 'Ламинирование бровей без окрашивания/коррекции', price: '1800' },
  //   {
  //     name: 'Ламинирование бровей без окрашивания и без коррекции',
  //     price: '1 500',
  //   },
  //   { name: 'Окрашивание и коррекция', price: '1 300' },
  //   { name: 'Окрашивание бровей', price: '800' },
  //   { name: 'Коррекция бровей', price: '800' },
  //   { name: 'Уход (ботокс)', price: '500' },
  //   { name: 'Депиляция 1 зоны', price: '300' },
  // ];

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
  //   // { name: 'Наращивание ногтей', price: 'от 2 300' },
  //   { name: 'Комбинированный маникюр', price: 'от 700' },
  //   { name: 'Френч', price: 'от 600' },
  //   { name: 'Дизайн ногтей', price: 'от 200' },
  //   { name: 'Рисунок на ногте', price: 'от 300' },
  //   { name: 'Необычная форма ногтей', price: 'от 2 700' },
  //   { name: 'Снятие чужой работы', price: 'от 300' },
  // ];

  const services: Services[] = [
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
      imageSrc: '/boy.jpg',
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
      imageSrc: '/women-hairstyle.jpg',
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
    //   id: SERVICES_ID.BROWS,
    //   items: brows,
    //   title: 'Брови',
    //   imageSrc: '/services-item-img-brows.jpg',
    //   description: (
    //     <div className={styles.servicesDescription}>
    //       <p>Пока стригут малыша, маме делают брови - это очень удобно!</p>
    //       <p>
    //         После стрижки ребенок играет с игрушками или смотрит мультики, мы
    //         найдем чем занять малыша, пока мама на процедуре.
    //       </p>
    //     </div>
    //   ),
    // },
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
    <div className={styles.servicesPage} id='service-page'>
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
        {services.map(({ id, items, title, imageSrc, description }) => (
          <SimpleCard key={id} justifyContent='space-between'>
            <div className={styles.servicesItemBlock} id={id}>
              <h2 className={styles.servicesItemTitle}>{title}</h2>
              {[SERVICES_ID.AQUAGRIM, SERVICES_ID.PIERCING].includes(id) ? (
                <div>
                  {items.map(({ name, price }) => (
                    <div
                      className={styles.servicesItemContent}
                      key={name?.toLocaleString()}
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
                        key={name?.toLocaleString()}
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
              {description}
            </div>
          </SimpleCard>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
