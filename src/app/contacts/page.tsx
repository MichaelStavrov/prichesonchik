import React from 'react';
import Head from 'next/head';
import styles from './ContactsPage.module.scss';

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
            <span>
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
              href='https://vk.com/prichesonchik_sergievposad'
              target='_blank'
              rel='noopener noreferrer'
              className={styles.tel}
            >
              https://vk.com/prichesonchik_sergievposad
            </a>
          </div>
        </div>
        <div className={styles.map}>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <a
              href='https://yandex.ru/maps/org/prichesonchik/66851843542/?utm_medium=mapframe&utm_source=maps'
              style={{
                color: '#eee',
                fontSize: '12px',
                position: 'absolute',
                top: 0,
              }}
            >
              Причесончик
            </a>
            <a
              href='https://yandex.ru/maps/10752/sergiev-posad/category/children_hairdresser/161532621367/?utm_medium=mapframe&utm_source=maps'
              style={{
                color: '#eee',
                fontSize: '12px',
                position: 'absolute',
                top: '14px',
              }}
            >
              Детский салон-парикмахерская в Сергиевом Посаде
            </a>
            <a
              href='https://yandex.ru/maps/10752/sergiev-posad/category/hairdresser/184105812/?utm_medium=mapframe&utm_source=maps'
              style={{
                color: '#eee',
                fontSize: '12px',
                position: 'absolute',
                top: '28px',
              }}
            >
              Парикмахерская в Сергиевом Посаде
            </a>

            <iframe
              src='https://yandex.ru/map-widget/v1/org/prichesonchik/66851843542/?indoorLevel=1&ll=38.135065%2C56.301379&z=16.69'
              width={800}
              height={300}
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
