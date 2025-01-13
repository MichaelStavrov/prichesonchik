import React from 'react';
import Image from 'next/image';
import styles from './ServicesPage.module.scss';
import SimpleCard from '@/components/SimpleCard';

const ServicesPage = () => {
  const servicesGirls = [
    { name: 'Стрижка модельная', price: 'от 600' },
    { name: 'Стрижка концов', price: 'от 400' },
    { name: 'Стрижка чёлки', price: 'от 150' },
    { name: 'Плетение кос', price: 'от 250' },
    { name: 'Прически', price: 'от 250' },
    { name: 'Окрашивание мелками', price: 'от 150' },
  ];

  const servicesBoys = [
    { name: 'Стрижка модельная', price: 'от 700' },
    { name: 'Стрижка ножницами', price: 'от 800' },
    { name: 'Стрижка машинкой', price: 'от 450' },
    { name: 'Стрижка наголо', price: 'от 300' },
    { name: 'Окантовка', price: 'от 200' },
    { name: 'Мытье головы', price: 'от 200' },
    { name: 'Художественный выстриг', price: 'от 200' },
  ];

  const servicesMens = [
    { name: 'Стрижка модельная', price: 'от 700' },
    { name: 'Стрижка ножницами', price: 'от 650' },
    { name: 'Стрижка машинкой', price: 'от 450' },
    { name: 'Стрижка наголо', price: 'от 300' },
    { name: 'Окантовка', price: 'от 200' },
    { name: 'Мытье головы', price: 'от 200' },
    { name: 'Художественный выстриг', price: 'от 200' },
  ];

  const servicesWomens = [
    { name: 'Стрижка модельная', price: 'от 700' },
    { name: 'Стрижка концов', price: 'от 500' },
    { name: 'Стрижка чёлки', price: 'от 200' },
    { name: 'Плетение кос', price: 'от 250' },
    { name: 'Прически', price: 'от 1550' },
    { name: 'Укладка волос', price: 'от 500' },
    { name: 'Укладка локоны', price: 'от 700' },
    { name: 'Мытье головы', price: 'от 200' },
  ];

  const aquagrim = [
    {
      name: 'Отличный способ разнообразить праздник и поднять настроение! Рисунки, узоры, маски героев – подарят удивительную возможность каждому ребенку перевоплотиться и получить удовольствие от праздника. С красочным гримом радость будет бесконечной, а приключения – невероятными!',
      price: 'от 300',
    },
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

  const manicure = [
    { name: 'Маникюр с покрытием гель-лаком, укрепление', price: 'от 1 900' },
    { name: 'Покрытие гель-лаком (без укрепления)', price: 'от 1 500' },
    { name: 'Аппаратный маникюр', price: 'от 700' },
    { name: 'Наращивание ногтей', price: 'от 2 300' },
    { name: 'Комбинированный маникюр', price: 'от 700' },
    { name: 'Дизайн ногтей', price: 'от 200' },
    { name: 'Рисунок на ногте', price: 'от 300' },
    { name: 'Необычная форма ногтей', price: 'от 2 700' },
    { name: 'Снятие чужой работы', price: 'от 300' },
  ];

  const services = [
    {
      id: 'girls',
      items: servicesGirls,
      title: 'Девочки',
      imageSrc: '/services-item-img-girl.jpg',
    },
    {
      id: 'boys',
      items: servicesBoys,
      title: 'Мальчики',
      imageSrc: '/services-item-img-boy.jpg',
    },
    {
      id: 'mens',
      items: servicesMens,
      title: 'Мужской зал',
      imageSrc: '/services-item-img-men.jpg',
    },
    {
      id: 'womens',
      items: servicesWomens,
      title: 'Женский зал',
      imageSrc: '/services-item-img-women.jpg',
    },
    {
      id: 'coloring',
      items: coloring,
      title: 'Окрашивание',
      imageSrc: '/services-item-img-coloring.jpg',
    },
    {
      id: 'aquagrim',
      items: aquagrim,
      title: 'Аквагрим',
      imageSrc: '/services-item-img-aquagrim.jpg',
    },
    {
      id: 'manicure',
      items: manicure,
      title: 'Маникюр',
      imageSrc: '/services-item-img-manicure.jpg',
    },
  ];

  const SERVICES_ITEM_IMG_WIDTH = 200;

  return (
    <div className={styles.servicesPage}>
      <h2 className={styles.title}>Наши услуги и цены</h2>
      <div className={styles.servicesGrid}>
        {services.map(({ id, items, title, imageSrc }) => (
          <SimpleCard key={id} justifyContent='space-between'>
            <div className={styles.servicesItemBlock}>
              <h3 className={styles.servicesItemTitle}>{title}</h3>
              {id === 'aquagrim' ? (
                <div>
                  {items.map(({ name, price }) => (
                    <div className={styles.servicesItemContent} key={name}>
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
                  <div>
                    {items.map(({ name, price }) => (
                      <div key={name} className={styles.servicesItemRow}>
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
