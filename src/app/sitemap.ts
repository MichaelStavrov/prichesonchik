import { RoutesMap } from '@/utils/routes';

export default async function sitemap() {
  return Object.values(RoutesMap).map((route) => ({
    url: `https://www.prichesonchik-sp.ru${route}`,
    lastModified: new Date().toISOString(),
  }));
}
