'use client';

import React, { FC, useEffect, useState } from 'react';
import styles from './OnlineReg.module.scss';

interface OnlineRegProps {
  variant?: 'default' | 'animated';
}

const OnlineReg: FC<OnlineRegProps> = ({ variant = 'default' }) => {
  const [onLoadOpenLink, setOnLoadOpenLink] = useState(false);

  useEffect(() => {
    if (onLoadOpenLink) {
      setTimeout(() => {
        setOnLoadOpenLink(false);
      }, 3000);
    }
  }, [onLoadOpenLink]);

  if (variant === 'animated') {
    return (
      <div className={styles.wrap}>
        <a
          className={styles.animatedBtn}
          href='https://dikidi.net/#widget=177386'
          onClick={() => setOnLoadOpenLink(true)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {onLoadOpenLink ? 'Открываем...' : 'Запись онлайн'}
        </a>
      </div>
    );
  }

  return (
    <a
      className={styles.link}
      href='https://dikidi.net/#widget=177386'
      onClick={() => setOnLoadOpenLink(true)}
    >
      {onLoadOpenLink ? 'Открываем...' : 'Запись онлайн'}
    </a>
  );
};

export default OnlineReg;
