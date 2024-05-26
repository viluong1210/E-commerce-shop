import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const allowedOrigin = process.env.ALLOWED_ORIGINS_CORS;
  const allowedOrigins = allowedOrigin.split(',');
  const corsOptions = {
    origin: allowedOrigins,
    allowedHeaders:
      'Access-Control-Allow-Headers, X-Requested-With, X-HTTP-Method-Override,  Cache-Control, Content-Type, Accept, Observe, Authorization, hash-referer, x-requested-with, x-xsrf-token, X-XSRF-TOKEN',
    methods: 'GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  };
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      // Use class-transformer library to transform objects
    }),
  );
  app.enableCors(corsOptions);
  await app.listen(3001);
}
bootstrap();
