'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import { CloseOutlined } from '@ant-design/icons';
import { slide as Menu } from 'react-burger-menu';
import { MenuContext } from '@/store/MenuContext';
import styles from './BurgerMenu.module.scss';
import Navigation from '../Navigation';

const BurgerMenu = () => {
  // const pathname = usePathname();
  const ctx = useContext(MenuContext);

  const LOGO_WIDTH = 200;
  const LOGO_HEIGHT = LOGO_WIDTH / 1.23;

  return (
    <Menu
      isOpen={ctx?.isOpen}
      onStateChange={({ isOpen }) => ctx?.setIsOpen(isOpen)}
      className={styles.wrapper}
    >
      <CloseOutlined className={styles.closeIcon} />
      <Image
        className={styles.logo}
        src='/logo.png'
        alt='логотип'
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
      />
      <Navigation burgerView />
    </Menu>
  );
};

export default BurgerMenu;
