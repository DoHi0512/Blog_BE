import { flatten, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //     forbidUnknownValues: false,
  //     transform: true,
  //   }),
  // );
  app.enableCors({
    origin: true,
    credentials: true,
  });
  await app.listen(8080);
}
bootstrap();
