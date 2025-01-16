import React from 'react';
import cn from 'classnames';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={cn(styles.colBlock, styles.colBlockHidden)}>
          <span>Семейный салон красоты в г. Сергиев Посад</span>
          <span> От первой стрижки - до прически!</span>
        </div>

        <a href='tel:+79252551949' className={styles.tel}>
          +7&nbsp;(925)&nbsp;255&nbsp;19&nbsp;49
        </a>
        <span className={styles.address}>
          г.&nbsp;Сергиев&nbsp;Посад, Вокзальная&nbsp;площадь&nbsp;1,
          ТЦ&nbsp;Преображенский, Цокольный&nbsp;этаж
        </span>
        <div className={cn(styles.colBlock, styles.colBlockHiddenMob)}>
          <span>&#169; Copyright 2024.</span>
          <span>Все права защищены!</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
