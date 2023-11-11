import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    // so retorna os os informações que contém a anotation do validator
    whitelist: true,
    // não aceita propriedades diferentes
    forbidNonWhitelisted: true,
    // faz a conversão de tipos automáticamente
    transform: true

  }));

  await app.listen(3000);
}
bootstrap();
