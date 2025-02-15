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
    anchor?: string;
  }

  const routes: NavRoutes[] = [
    { path: RoutesMap.MAIN, label: 'Главная', anchor: 'stock-prompt' },
    { path: RoutesMap.STOCK, label: 'Акции', anchor: 'stock-page' },
    {
      path: RoutesMap.SERVICES,
      label: 'Услуги и цены',
      anchor: 'service-page',
    },
    { path: RoutesMap.SAMPLES, label: 'Галерея', anchor: 'samples-page' },
    { path: RoutesMap.REVIEWS, label: 'Отзывы', anchor: 'reviews-page' },
    { path: RoutesMap.USEFUL, label: 'Полезное', anchor: 'useful-page' },
    { path: RoutesMap.CONTACTS, label: 'Контакты', anchor: 'contacts-page' },
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
      {routes.map(({ path, label, anchor }) => (
        <Button
          key={path}
          type='link'
          className={cn(styles.navBtn, {
            [styles.activeNavBtn]: pathname === path,
          })}
          onClick={() => router.push(`${path}/#${anchor}`)}
        >
          {label}
        </Button>
      ))}
    </nav>
  );
};

export default Navigation;
