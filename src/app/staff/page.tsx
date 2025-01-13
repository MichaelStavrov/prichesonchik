import React from 'react';
import Image from 'next/image';
import styles from './StaffPage.module.scss';

const StaffPage = () => {
  const STAFF_IMG_WIDTH = 300;

  return (
    <div className={styles.staffPage}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши мастера</h2>
        <div className={styles.staffContainer}>
          <Image
            className={styles.staffImage}
            src='/staff-natalia.jpg'
            alt='Мастер Наталья'
            width={STAFF_IMG_WIDTH}
            height={STAFF_IMG_WIDTH / 0.75}
          />
          <Image
            className={styles.staffImage}
            src='/staff-alla.jpg'
            alt='Мастер Алла'
            width={STAFF_IMG_WIDTH}
            height={STAFF_IMG_WIDTH / 0.75}
          />
        </div>
      </div>
    </div>
  );
};

export default StaffPage;
