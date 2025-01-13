import React, { FC } from 'react';
import styles from './OnlineReg.module.scss';

interface OnlineRegProps {
  variant?: 'default' | 'animated';
}

const OnlineReg: FC<OnlineRegProps> = ({ variant = 'default' }) => {
  if (variant === 'animated') {
    return (
      <div className={styles.wrap}>
        <a
          className={styles.animatedBtn}
          href='https://dikidi.net/#widget=177386'
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Запись онлайн
        </a>
      </div>
    );
  }

  return (
    <a className={styles.link} href='https://dikidi.net/#widget=177386'>
      Запись онлайн
    </a>
  );
};

export default OnlineReg;
