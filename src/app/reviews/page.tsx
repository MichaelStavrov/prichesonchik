import React from 'react';
import Head from 'next/head';
import { StarFilled } from '@ant-design/icons';
import styles from './ReviewsPage.module.scss';

export const metadata = {
  title: 'Отзывы о парикмахерской Причесончик Сергиев Посад',
  description: 'реальные отзывы',
};

const ReviewsPage = () => {
  const reviewsItems = [
    {
      name: 'Алина',
      review:
        'Очень классно подстригли моих детишек! Сына посадили в машинку-кресло и пока его стригли он еще и мультики смотрел. А дочка в это время играла в игрушечную кухню) Для детей прям топ за свои деньги! Придем еще обязательно!',
    },
    {
      name: 'Валентин',
      review:
        'Очень понравилось, как записался мне отправили оповещение и видео как добраться до парикмахерской, команда мастеров своего дела приветлива и дружелюбна, 5 звезд (по отзывам есть чувство что парикмахерская только для детей, однако стерегут и взрослых)',
    },
    {
      name: 'Артем',
      review:
        'Все здорово, видно отношение к детям, ребенок постригся, посидел на двух машинах, посмотрел мультфильм, поиграл в зоне ожидания, так же есть удобная зона ожидания для родителей. По окончанию стрижки нам дали бланк для письма дедушке морозу, шарик и сладкий подарок!) Отношение к детям бережное, мне как родителю все понравилось, а ребенок не хотел уходить!) Удачи вам девочки!',
    },
    {
      name: 'Rueidhri',
      review:
        'Обалденная парикмахерская, приятные девочки, отлично находят подход к детям, даже самым маленьким. Остались довольны стрижкой и общением. Обязательно вернемся.',
    },
    {
      name: 'Мария',
      review:
        'Отличная парикмахерская! Сын не любит стричься, но здесь все прошло на ура. Приятные парикмахеры, машинки и мультики, классная атмосфера',
    },
    {
      name: 'Вера',
      review:
        'Парикмахерская ориентирована на малышей, Девушки мастера милые, молодые, хорошо ладят с детьми. Вместо кресел машинки, большой телевизор с мультиками. Приятные цены. Можно подстричься не только деткам но и взрослым. Рекомендую!!!',
    },
    {
      name: 'Екатерина',
      review:
        'Замечательная парикмахерская, профессиональные мастера, адекватные цены, приятная обстановка. Остались очень довольны, обязательно придём ещё.',
    },
    {
      name: 'Елена',
      review:
        'Всё очень понравилось. Дочку красиво постригли и уложили, а ещё дали подарки) всем мамочкам и их детишкам очень рекомендую! Кстати, очень красивые кресла машинки',
    },
    {
      name: 'Светлана',
      review:
        'Быстро, недорого, приятная девушка мастер и на рецепшене, очень понравилось. Всё супер!',
    },
    {
      name: 'Ольга',
      review:
        'Отличная парикмахерская! Дети довольны , выдали сертификаты, шарики и конфеты) А самое главное прекрасно подстригли)',
    },
    {
      name: 'Людмила',
      review:
        'Самая классная парикмахерская ориентирована на работе с малышами есть всё чтобы детям было уютно игрушки, мультики и кресла машинки.',
    },
    {
      name: 'Ольга',
      review:
        'О, круто, что эта сеть появилась в Сергиев Посаде. Не раз мои дети были в Пушкино и в Ивантеевке. Везде очень хорошее отношение к детям, работают профессионалы.',
    },
    {
      name: 'Angelina',
      review:
        'Гуляли, зашли сделать прически, администратор и парикмахеры очень вежливые, сделали все отлично, остались довольны!)',
    },
    {
      name: 'Татьяна',
      review:
        'Были с дочкой первый раз в этом салоне. Очень понравился мастер - добрая и аккуратная. Качество работы на высоте. В салоне очень светло, чисто и аккуратно. Администратор просто милейшая девушка - все рассказала и показала. Дочку после стрижки заплели и подарили шарик. Будем приходить сюда ещё и рекомендовать это место своим друзьям и знакомым',
    },
    {
      name: 'Vlad',
      review:
        'Ехали с дачи, заехали в Мак и попали на открытие этой парикмахерской. Племянник выбрал себе кресло-машину, включил Смешариков и был пострижен без стресса и нервов) Стрижка классная. Мастер очень понравилась. Разрешила взять с собой на стрижку картофель фри)) Спасибо, будем заезжать еще',
    },
    {
      name: 'Сергей',
      review:
        'Хорошо стригут, особенно понравилось, что ребёнок смотрит в это время мультик и сидит в машинке и ему все нравится! Я отдохнул и ребёнок доволен)',
    },
    {
      name: 'Михаил',
      review:
        'Хорошо стригут, детям очень нравятся машинки и мультики) рекомендую!',
    },
  ];

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className={styles.reviewsPage} id='reviews-page'>
      <Head>
        <title>Отзывы о Причесончике</title>
        <meta
          name='description'
          content='Отзывы клиентов о парикмахерской Причесончик'
          key='desc'
        />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Отзывы наших клиентов</h1>
        <div className={styles.row}>
          <a
            className={styles.outerLink}
            href='https://yandex.ru/maps/org/prichesonchik/66851843542/reviews/?indoorLevel=1&ll=38.135756%2C56.302758&tab=reviews&z=16.63'
            target='_blank'
            rel='noopener noreferrer'
          >
            Посмотреть отзывы на Яндекс картах
          </a>
          <a
            className={styles.outerLink}
            href='https://vk.com/reviews-227950157'
            target='_blank'
            rel='noopener noreferrer'
          >
            Посмотреть отзывы ВКонтакте
          </a>
        </div>

        <ul className={styles.reviewsList}>
          {reviewsItems.map(({ name, review }) => (
            <li className={styles.reviewsListItem} key={review}>
              <div className={styles.reviewsListItemRow}>
                <span className={styles.reviewsListItemName}>{name}</span>
                <div className={styles.reviewsListItemStars}>
                  {stars.map((item) => (
                    <StarFilled
                      className={styles.reviewsListItemStar}
                      key={item}
                    />
                  ))}
                </div>
              </div>
              <span>{review}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReviewsPage;
