import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions = {
    origin: [
      'http://localhost:3001',
      'https://studio.apollographql.com',
      'https://avdtvclient.onrender.com',
      'https://avd-mediaplatform-client-git-develop-avd-server.vercel.app',
      'https://avd-mediaplatform-client.vercel.app',
    ],
    credentials: true,
    AllowedHeaders: ['Content-Type', 'Authorization'],
  };

  // Enable CORS for all routes
  app.enableCors(corsOptions);

  // app.use(
  //   morgan(
  //     ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent',
  //   ),
  // );

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
