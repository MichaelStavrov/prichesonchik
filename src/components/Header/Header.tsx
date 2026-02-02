'use client';

import React, { useContext } from 'react';
import { HomeTwoTone, MenuOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { RoutesMap } from '@/utils/routes';
import Navigation from '../Navigation';
import OnlineReg from '../OnlineReg';
import styles from './Header.module.scss';
import { MenuContext } from '@/store/MenuContext';
// import HiddenAdminEntryPoint from '../HiddenAdminEntryPoint/HiddenAdminEntryPoint';

const Header = () => {
  const router = useRouter();
  const ctx = useContext(MenuContext);

  return (
    <header className={styles.header}>
      {/* <HiddenAdminEntryPoint /> */}
      <div className={styles.container}>
        <MenuOutlined
          className={styles.burgerBtn}
          onClick={() => ctx?.setIsOpen(true)}
        />
        <HomeTwoTone
          className={styles.logo}
          twoToneColor={'#ffffff'}
          onClick={() => router.push(RoutesMap.MAIN)}
        />
        <Navigation />
        <div className={styles.regBtn}>
          <OnlineReg />
        </div>
      </div>
    </header>
  );
};

export default Header;
