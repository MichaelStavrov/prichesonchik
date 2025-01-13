'use client';

import React from 'react';
import { HomeTwoTone } from '@ant-design/icons';
import styles from './Header.module.scss';
import Navigation from '../Navigation';
import OnlineReg from '../OnlineReg';
import { useRouter } from 'next/navigation';
import { RoutesMap } from '@/utils/routes';

const Header = () => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <HomeTwoTone
          className={styles.logo}
          twoToneColor={'#ffffff'}
          onClick={() => router.push(RoutesMap.MAIN)}
        />
        <Navigation />
        <OnlineReg />
      </div>
    </header>
  );
};

export default Header;
