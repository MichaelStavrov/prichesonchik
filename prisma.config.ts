import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  engine: 'classic',
  datasource: {
    url: 'postgres://186d3fc66bc8e26775d093306916ce2246277e24fbaddcc37b09b13f1549062a:sk_gszd8a-epsOFYNeG-i1FH@db.prisma.io:5432/postgres?sslmode=require',
  },
});
