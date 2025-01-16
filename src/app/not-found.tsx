import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { RoutesMap } from '@/utils/routes';

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.notFoundPageContainer}>
        <div className={styles.notFoundPageContent}>
          <span>
            Такой страницы нет, перейдите{' '}
            <Link className={styles.notFoundPageLink} href={RoutesMap.MAIN}>
              на Главную
            </Link>{' '}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
