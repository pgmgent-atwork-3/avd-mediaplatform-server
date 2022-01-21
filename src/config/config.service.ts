import { TypeOrmModuleOptions } from '@nestjs/typeorm';

require('dotenv').config();

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return !this.isProduction()
      ? {
          type: 'postgres',

          host: this.getValue('PG_HOST'),
          port: parseInt(this.getValue('PG_PORT')),
          username: this.getValue('PG_USER'),
          password: this.getValue('PG_PASSWORD'),
          database: this.getValue('PG_DATABASE'),

          entities: ['dist/**/*.entity{.ts,.js}'],

          autoLoadEntities: true,

          migrationsTableName: 'migration',

          migrations: ['src/migration/*.ts'],

          cli: {
            migrationsDir: 'src/migration',
          },

          synchronize: true,

          logging: true,

          ssl: this.isProduction() ? { rejectUnauthorized: false } : false,
        }
      : {
          type: 'postgres',
          url: this.getValue('DATABASE_URL'),
          entities: ['dist/**/*.entity{.ts,.js}'],
          synchronize: true,
          logging: false,
          ssl: this.isProduction() ? { rejectUnauthorized: false } : false,
        };
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'PG_HOST',
  'PG_PORT',
  'PG_USER',
  'PG_PASSWORD',
  'PG_DATABASE',
  'DATABASE_URL',
]);

export { configService };
