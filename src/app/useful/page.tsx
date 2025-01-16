import React from 'react';
import Head from 'next/head';
import styles from './UsefulPage.module.scss';

const UsefulPage = () => {
  const usefulItems = [
    {
      title: 'Что нужно знать о первой стрижке ребенка?',
      description: (
        <div className={styles.usefulListItemDesc}>
          <p>
            Переживаете за первую стрижку вашего малыша? Не волнуйтесь, ведь
            специальные детские парикмахерские могут сделать это занятие легким
            и приятным для вашего ребенка.
          </p>
          <p>
            Первая стрижка малыша – это часто волнительный момент для родителей.
            Мы хотим, чтобы этот опыт был как можно более комфортным и
            безопасным для вашего ребенка. В парикмахерской
            &quot;Причесончик&quot; наши профессиональные мастера особенно
            заботятся о первой стрижке и создают специальную атмосферу, которая
            помогает ребенку расслабиться и отвлечься.
          </p>
          <p>
            Мы понимаем, что дети могут быть испуганными и плакать во время
            стрижки. Для этого мы использовали интересные и увлекательные кресла
            в виде машинок и мультики, чтобы помочь ребенку чувствовать себя
            комфортно и получать удовольствие от процесса. Наши мастера обладают
            опытом работы с детьми и знают, как установить дружественную
            обстановку, чтобы ребенок чувствовал себя спокойно и доверял им.
          </p>
        </div>
      ),
    },
    {
      title: 'Почему лучше проколоть уши ребенку, пока он маленький',
      description: (
        <div className={styles.usefulListItemDesc}>
          <p>
            Оптимальным сроком для прокола ушей является возраст{' '}
            <b>от 6 месяцев</b>. И это действительно подтверждается врачами:
          </p>
          <ul>
            <li>процедура проходит быстро и безболезненно;</li>
            <li>
              риск образования рубцов или шрамов в этом возрасте практически
              равен нулю;
            </li>
            <li>
              нет риска задеть какие-либо точки на мочке уха, которые могут
              привести к ухудшению состояния ребенка;
            </li>
            <li>
              ранки заживают без болезненных ощущений, и процесс восстановления
              тканей протекает очень быстро.
            </li>
          </ul>
          <p>
            Если родителями принято решение об осуществлении процедуры, то
            следует выбрать наименее травматичный способ прокалывания ушей : с
            помощью прибора Стадэкс, который в отличие от привычного пистолета
            не производит разрыв тканей с пугающим детей звуком, а мягко
            раздвигает их. Способ совершенно безболезненный, безопасный с точки
            зрения внесения инфекции, поскольку каждая сережка находится в
            специальной капсуле. Таким современным оборудованием в совершенстве
            владеют специалисты из салона «Причесончик». Они же знакомы с
            особенностями поведения детей в подобных ситуациях в силу
            специализации салона.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.usefulPage}>
      <Head>
        <title>Полезная информация парикмахерской Причесончик</title>
        <meta
          name='description'
          content='интересная и полезная информация об услугах'
          key='desc'
        />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}> Полезная информация</h1>
        <ul className={styles.usefulList}>
          {usefulItems.map(({ title, description }) => (
            <li className={styles.usefulListItem} key={title}>
              <span className={styles.usefulListItemTitle}>{title}</span>
              <span>{description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsefulPage;
