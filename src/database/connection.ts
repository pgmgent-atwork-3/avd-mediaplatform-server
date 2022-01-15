import { ConnectionOptions } from 'typeorm';

import * as dotenv from 'dotenv';

const typeOrmConfig: ConnectionOptions = !process.env.DATABASE_URL
  ? {
      type: 'postgres',
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }
  : {
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      ssl: { rejectUnauthorized: false },
    };

console.log(typeOrmConfig);

module.exports = {
  ...typeOrmConfig,
  seeds: [__dirname + '/../database/seeds/*{.ts,.js}'],
  factories: [__dirname + '/../database/factories/*{.ts,.js}'],
};
