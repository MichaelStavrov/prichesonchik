'use client';

import React, { FC, useContext } from 'react';
import { Button } from 'antd';
import cn from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
import { RoutesMap } from '@/utils/routes';
import styles from './Navigation.module.scss';
import { MenuContext } from '@/store/MenuContext';

interface NavigationProps {
  burgerView?: boolean;
}

const Navigation: FC<NavigationProps> = ({ burgerView }) => {
  const router = useRouter();
  const pathname = usePathname();
  const ctx = useContext(MenuContext);

  interface NavRoutes {
    path: string;
    label: string;
  }

  const routes: NavRoutes[] = [
    { path: RoutesMap.MAIN, label: 'Главная' },
    { path: RoutesMap.STOCK, label: 'Акции' },
    { path: RoutesMap.SERVICES, label: 'Услуги и цены' },
    { path: RoutesMap.SAMPLES, label: 'Галерея' },
    { path: RoutesMap.REVIEWS, label: 'Отзывы' },
    { path: RoutesMap.USEFUL, label: 'Полезное' },
    { path: RoutesMap.CONTACTS, label: 'Контакты' },
  ];

  const handleRouteClick = (path: string) => {
    ctx?.setIsOpen(false);
    router.push(path);
  };

  if (burgerView) {
    return (
      <nav className={styles.navigationBurger}>
        {routes.map(({ path, label }) => (
          <Button
            key={path}
            type='link'
            className={styles.navBtnBurger}
            onClick={() => handleRouteClick(path)}
          >
            {label}
          </Button>
        ))}
      </nav>
    );
  }

  return (
    <nav className={styles.navigation}>
      {routes.map(({ path, label }) => (
        <Button
          key={path}
          type='link'
          className={cn(styles.navBtn, {
            [styles.activeNavBtn]: pathname === path,
          })}
          onClick={() => router.push(path)}
        >
          {label}
        </Button>
      ))}
    </nav>
  );
};

export default Navigation;
