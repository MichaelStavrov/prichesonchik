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
            Прокол ушей - важное событие для девочки и ее семьи. Ребенок
            получает первое в жизни украшение - это так волнительно и прекрасно.
          </p>
          <p>
            Есть повод сделать массу памятных фото и даже устроить небольшой
            праздник. И здесь мы вам поможем, так как прокол ушей в Причесончике
            вызывает только приятные эмоции.
          </p>
          <p>
            Во-первых, у нас есть сережки разных дизайнов на выбор. Во-вторых,
            мы подарим грамоту за смелость после прокола и сделаем отличное фото
            на память в ярком интерьере салона.
          </p>
          <p>
            Но что волнует родителей больше, чем красота? Безопасность
            процедуры! А также сомнения, нужно ли колоть уши в самом маленьком
            возрасте?
          </p>
          <p>
            С точки зрения безопасности колоть уши можно детям в любом возрасте,
            главное, правильный выбор инструмента для прокола и тщательная
            гигиена после. В Причесончике используется система Studex R993,
            самая малотравматичная из существующих.
          </p>
          <p>
            Есть ли противопоказания для прокола самым маленьким? В любой
            непонятной ситуации лучше проконсультироваться у вашего педиатра,
            конечно. Но для здорового ребенка никаких противопоказаний нет.
            Серьги пуссеты надежно фиксируются после прокола, поэтому сам
            ребенок их не сможет раскрутить, вынуть или как-то нарушить ход
            заживления. На практике дети забывают про серьги уже через пару
            часов.
          </p>
          <p>
            Проколоть уши можно в 6 месяцев, 3 года или первокласснице, и в
            любом возрасте это будет быстро и безопасно. Выбор возраста прокола
            на усмотрение родителя, а качество прокола - за нами.
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
