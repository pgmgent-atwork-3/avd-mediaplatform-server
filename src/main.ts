import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions = {
    origin: 'http://localhost:3005',
    credentials: true,
  };

  // Enable CORS for all routes
  app.enableCors(corsOptions);

  app.use(morgan('dev'));

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
