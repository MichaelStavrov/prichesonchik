'use client';

import React from 'react';
import { Button } from 'antd';
import cn from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
import { RoutesMap } from '@/utils/routes';
import styles from './Navigation.module.scss';

const Navigation = () => {
  const router = useRouter();
  const pathname = usePathname();

  interface NavRoutes {
    path: string;
    label: string;
  }

  const routes: NavRoutes[] = [
    { path: RoutesMap.MAIN, label: 'Главная' },
    { path: RoutesMap.SERVICES, label: 'Услуги и цены' },
    { path: RoutesMap.SAMPLES, label: 'Галерея' },
    { path: RoutesMap.REVIEWS, label: 'Отзывы' },
    { path: RoutesMap.USEFUL, label: 'Полезное' },
    { path: RoutesMap.CONTACTS, label: 'Контакты' },
  ];

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
