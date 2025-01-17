import Image from 'next/image';
import { CheckOutlined } from '@ant-design/icons';
import MainCarousel from '@/components/MainCarousel';
import styles from './page.module.css';
import SimpleCard from '@/components/SimpleCard';

export default function Home() {
  const advantages = [
    {
      title: 'Творческий подход персонала',
      description:
        'Наши мастера готовы к любым реакциям вашего ребенка. Они знают, как успокоить, развеселить и увлечь ребенка процессом стрижки. Они не откажут в стрижке, если ребенок плачет или дерется. А найдут способ подружиться с ребенком и сделать стрижку по запросу родителей.',
      image: '/advatnages-item-1.png',
    },
    {
      title: 'Парк развлечений для детей!',
      description:
        'Игровой уголок, развивающие журналы, музыкальные кресла машинки, мультики, сладкие подарки и грамоты. Похоже на описание игровой, но все это есть в нашем салоне! Ребенок даже не заметит, что его стригут, потому что вокруг столько интересного! А еще у нас продаются воздушные шарики и игрушки!',
      image: '/advatnages-item-2.png',
    },
    {
      title: 'Взрослым можно и нужно!',
      description:
        'Семейная стрижка - идеальное начало дня!  По очереди постриглись ребенок, мама и папа, и пошли красивые гулять и отдыхать. Или найдите время для себя, и запишитесь на модную мужскую стрижку или трендовое женсоке окрашивание! Оказываем полный спектр самых востребованных бьюти услуг для взрослых.',
      image: '/advatnages-item-3.png',
    },
    {
      title: 'Чистота и красота',
      description:
        'Мы тщательно продумали дизайн помещения, чтобы гостям было у нас комфортно, уютно и удобно. Цветовая гамма салона подарит вам хорошее настроение и заряд энергии! А исключительная чистота помещения и оборудования гарантируют вам безопасность всех процедур.',
      image: '/advatnages-item-4.png',
    },
  ];

  return (
    <div className={styles.content}>
      <div className={styles.rowBlock}>
        <div className={styles.infoCardsBlock}>
          <SimpleCard>
            <div className={styles.mainInfoText}>
              <div className={styles.titleContainer}>
                <h1 className={styles.title}>
                  Добро пожаловать в &quot;Причесончик&quot; в Сергиевом Посаде!
                </h1>
                <Image
                  className={styles.mainInfoIcon}
                  src='/attr2.png'
                  alt=''
                  width={96}
                  height={96}
                />
              </div>
              <p>
                Наш семейный салон красоты приветствует вас и приглашает в мир
                красивых стрижек для детей и взрослых!
              </p>
              <p>
                Широкий выбор услуг, дружелюбная атмосфера и внимание к
                пожеланиям сделают детей и родителей довольными, счастливыми и
                красивыми!
              </p>
            </div>
          </SimpleCard>
          <SimpleCard>
            <div className={styles.mainInfoText}>
              <div className={styles.titleContainer}>
                <p className={styles.title}>
                  Чем отличается семейный салон от обычной парикмахерской?
                </p>
                <Image src='/attr3.png' alt='' width={96} height={96} />
              </div>
              <p>В салоне есть все для удобства детей:</p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <CheckOutlined className={styles.checkIcon} />
                  <span>Специальные кресла машинки разных цветов</span>
                </li>
                <li className={styles.listItem}>
                  <CheckOutlined className={styles.checkIcon} />
                  <span>Трансляция мультфильмов</span>
                </li>
                <li className={styles.listItem}>
                  <CheckOutlined className={styles.checkIcon} />
                  <span>Яркий дизайн помещения</span>
                </li>
                <li className={styles.listItem}>
                  <CheckOutlined className={styles.checkIcon} />
                  <span>Игровой уголок</span>
                </li>
                <li className={styles.listItem}>
                  <CheckOutlined className={styles.checkIcon} />
                  <span>Сладкий подарок после стрижки</span>
                </li>
              </ul>
              <p>
                В детской парикмахерской ребенок не испугается машинки или фена!
                Индивидуальный подход мастеров превратит рядовую стрижку в
                фантастическое приключение, которое захочется повторять снова и
                снова!
              </p>
              <p>
                Также в салоне &quot;Причесончик&quot; можно подстричься всей
                семьей за один визит! Мы предоставляем полный спектр
                парикмахерских услуг для взрослых. Также мы щедры на различные
                акции. Экономьте время и бюджет вместе с нами!
              </p>
            </div>
          </SimpleCard>
        </div>
        <MainCarousel />
      </div>
      <div className={styles.advantagesBlock}>
        <p className={styles.advantagesBlockTitle}>
          Почему у нас лучшее место для стрижек?
        </p>
        <div className={styles.gridContainer}>
          {advantages.map(({ title, description, image }) => (
            <div className={styles.advantagesBlockItem} key={title}>
              <span className={styles.advantagesBlockItemTitle}>{title}</span>
              <Image src={image} alt='' width={160} height={160} />

              <p className={styles.advantagesBlockItemDesc}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
