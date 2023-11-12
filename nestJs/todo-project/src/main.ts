import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // SWAGGER
  const config = new DocumentBuilder()
  .setTitle('TODOApp API')
  .setVersion('0.0.1')
  .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, document);
  ////

  // VALIDAÇÃO DE ERRO COM A CLASSE class-validator
  app.useGlobalPipes(new ValidationPipe());
  ///
  
  await app.listen(3000);
}
bootstrap();
