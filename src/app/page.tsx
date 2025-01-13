import Image from 'next/image';
import MainCarousel from '@/components/MainCarousel';
import styles from './page.module.css';
import SimpleCard from '@/components/SimpleCard';

export default function Home() {
  const advantages = [
    {
      title: ' Специализированный персонал',
      description:
        ' Обязательная часть подготовки наших мастеров — психологические курсы, после которых они умеют находить подход ко всем деткам, даже к самым маленьким и непоседливым.',
      image: '/advatnages-item-1.png',
    },
    {
      title: 'Детки увлечены мультиками',
      description:
        'В наших студиях море игрушек, вместо кресел — машинки, вместо зеркал — телевизоры. Дети ходят в «Воображулю» как на праздник и даже не замечают, что их стригут.',
      image: '/advatnages-item-2.png',
    },
    {
      title: 'Мама и папа тоже стригутся',
      description:
        'Наши мастера стригут не только деток, но и взрослых. К нам приходят наводить красоту всей семьёй, и мы за это дарим хорошие скидки.',
      image: '/advatnages-item-2.png',
    },
    {
      title: 'Чистота и уют',
      description:
        'Оборудование в «Воображуле» — собственного производства, абсолютно не травмоопасное. А инструменты постоянно дезинфицируются и стерилизуются.',
      image: '/advatnages-item-2.png',
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
                <Image src='/attr2.png' alt='' width={96} height={96} />
              </div>
              <p>
                Мы - семейная сетевая парикмахерская, которая прекрасно знает,
                как сделать волосы ваших детей красивыми и стильными.
              </p>
              <p>
                Наша цель - сделать каждого ребенка счастливым и уверенным в
                себе с помощью уникального стиля и оригинальных причесок.
              </p>
            </div>
          </SimpleCard>
          <SimpleCard>
            <div className={styles.mainInfoText}>
              <div className={styles.titleContainer}>
                <p className={styles.title}>
                  Чем отличается детский фирменный салон от обычной
                  парикмахерской?
                </p>
                <Image src='/attr3.png' alt='' width={96} height={96} />
              </div>
              <p>
                Мы понимаем, что поход к парикмахеру может быть страшным для
                детей. Поэтому наши кресла-машинки способны превратить процесс
                стрижки в увлекательное и интересное мероприятие.
              </p>
              <p>
                У нас есть игровой уголок и телевизор, чтобы детки во время
                стрижки смотрели мультики.
              </p>
            </div>
          </SimpleCard>
        </div>
        <MainCarousel />
      </div>
      <div className={styles.advantagesBlock}>
        <p className={styles.advantagesBlockTitle}>
          Почему вам нужно именно к нам?
        </p>
        <div className={styles.gridContainer}>
          {advantages.map(({ title, description, image }) => (
            <div className={styles.advantagesBlockItem} key={title}>
              <span className={styles.advantagesBlockItemTitle}>{title}</span>
              <Image src={image} alt='' width={160} height={160} />

              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
