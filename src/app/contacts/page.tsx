import React from 'react';
import Head from 'next/head';
import styles from './ContactsPage.module.scss';

export const metadata = {
  title: 'Контакты парикмахерской Причесончик Сергиев Посад',
  description: 'Телефон, адрес, вконтакте, вк',
};

const ContactsPage = () => {
  return (
    <div className={styles.contactsPage}>
      <Head>
        <title>Контакты парикмахерской, салона красоты Причесончик</title>
        <meta
          name='description'
          content='Причесончик - телефон, адрес, вк, вконтакте, график работы, '
          key='desc'
        />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Наши контакты</h1>
        <div className={styles.contactsContainer}>
          <div className={styles.contactsRow}>
            <span className={styles.contactsName}>Адрес: </span>
            <span className={styles.contactsAddress}>
              г.&nbsp;Сергиев&nbsp;Посад, Вокзальная&nbsp;площадь&nbsp;1,
              ТЦ&nbsp;Преображенский, Цокольный&nbsp;этаж
            </span>
          </div>
          <div className={styles.contactsRow}>
            <span className={styles.contactsName}>Телефон:</span>
            <span>
              <a href='tel:+79252551949' className={styles.tel}>
                +7&nbsp;(925)&nbsp;255&nbsp;19&nbsp;49
              </a>
            </span>
          </div>
          <div className={styles.contactsRow}>
            <span className={styles.contactsName}>График работы:</span>
            <span>Ежедневно с&nbsp;10.00&nbsp;до&nbsp;20.00</span>
          </div>
          <div className={styles.contactsRow}>
            <span className={styles.contactsName}>ВКонтакте:</span>
            <a
              href='https://vk.cc/cHnA4n'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.tel}
            >
              https://vk.cc/cHnA4n
            </a>
          </div>
        </div>
        <div className={styles.map}>
          <div className={styles.mapContainer}>
            {/* <a
              className={styles.link1}
              href='https://yandex.ru/maps/org/prichesonchik/66851843542/?utm_medium=mapframe&utm_source=maps'
            >
              Причесончик
            </a>
            <a
              className={styles.link2}
              href='https://yandex.ru/maps/10752/sergiev-posad/category/children_hairdresser/161532621367/?utm_medium=mapframe&utm_source=maps'
            >
              Детский салон-парикмахерская в Сергиевом Посаде
            </a>
            <a
              className={styles.link3}
              href='https://yandex.ru/maps/10752/sergiev-posad/category/hairdresser/184105812/?utm_medium=mapframe&utm_source=maps'
            >
              Парикмахерская в Сергиевом Посаде
            </a> */}

            <iframe
              className={styles.mapFrame}
              src='https://yandex.ru/map-widget/v1/org/prichesonchik/66851843542/?indoorLevel=1&ll=38.135065%2C56.301379&z=16.69'
              frameBorder={0}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
