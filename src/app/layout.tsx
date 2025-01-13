import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
import { Inter } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, ThemeConfig } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import './globals.css';
import Header from '@/components/Header/Header';
import Image from 'next/image';
import { Shantell_Sans } from 'next/font/google';
import cn from 'classnames';
import {
  PhoneFilled,
  ClockCircleFilled,
  CompassFilled,
} from '@ant-design/icons';
import styles from './page.module.css';
import SimpleCard from '@/components/SimpleCard';
import OnlineReg from '@/components/OnlineReg';
import Link from 'next/link';
import { RoutesMap } from '@/utils/routes';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'Причесончик',
  description: 'Детский, семейный салон красоты',
};

const theme: ThemeConfig = {
  components: {
    Carousel: {
      arrowSize: 30,
    },
  },
};

const shantellSans = Shantell_Sans({ subsets: ['latin'] });

const services = [
  { name: 'Детские стрижки' },
  { name: 'Взрослые стрижки' },
  { name: 'Прокол ушей' },
  { name: 'Аквагрим' },
  { name: 'Окрашивание' },
  { name: 'Маникюр' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const LOGO_WIDTH = 340;
  const LOGO_HEIGHT = 340 / 1.23;

  return (
    <html lang='ru'>
      <ConfigProvider theme={theme}>
        <body className={inter.className}>
          <Header />
          <main className={styles.main}>
            <div className={styles.mainContainer}>
              <div className={styles.rowContainer}>
                <div className={styles.colContainer}>
                  <div className={cn(shantellSans.className, styles.promo)}>
                    От первой стрижки до прически!
                  </div>
                  <SimpleCard>
                    <div className={styles.servicesList}>
                      {services.map(({ name }) => (
                        <Link
                          key={name}
                          className={styles.servicesListItem}
                          href={RoutesMap.SERVICES}
                        >
                          <CheckCircleOutlined
                            className={styles.servicesListItemIcon}
                          />
                          <span>{name}</span>
                        </Link>
                      ))}
                    </div>
                  </SimpleCard>
                </div>
                <Image
                  src='/logo.png'
                  alt='логотип'
                  width={LOGO_WIDTH}
                  height={LOGO_HEIGHT}
                  priority
                />
                <div className={styles.colContainer}>
                  <div className={cn(shantellSans.className, styles.promo)}>
                    Для детей и взрослых
                  </div>

                  <SimpleCard fullHeight>
                    <div className={styles.contacts}>
                      <div className={styles.contactsItem}>
                        <PhoneFilled className={styles.contactsItemIcon1} />
                        <a href='tel:+79252551949' className={styles.tel}>
                          +7&nbsp;(925)&nbsp;255&nbsp;19&nbsp;49
                        </a>
                      </div>
                      <div className={styles.contactsItem}>
                        <ClockCircleFilled
                          className={styles.contactsItemIcon2}
                        />
                        <span>Ежедневно с&nbsp;10.00 до&nbsp;20.00</span>
                      </div>
                      <div className={styles.contactsItem}>
                        <CompassFilled className={styles.contactsItemIcon3} />
                        <span>
                          г.&nbsp;Сергиев&nbsp;Посад, <br /> Вокзальная
                          площадь&nbsp;1, <br /> ТЦ&nbsp;Преображенский
                        </span>
                      </div>
                    </div>
                  </SimpleCard>
                </div>
              </div>
            </div>
            <AntdRegistry>{children}</AntdRegistry>
            <div className={styles.regBtn}>
              <OnlineReg variant='animated' />
            </div>
          </main>
          <Footer />
          <script
            defer
            type='text/javascript'
            src='https://dikidi.net/assets/js/widget_record/widget2.min.js'
          ></script>
        </body>
      </ConfigProvider>
    </html>
  );
}
