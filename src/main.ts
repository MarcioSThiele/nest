import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './modules/default/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // const options = new DocumentBuilder()
  //   .setTitle('Task API')
  //   .setDescription('This is a simple Task API')
  //   .setVersion('1.0.0')
  //   .build();

  // const document = SwaggerModule.createDocument(app, options);
  // SwaggerModule.setup('swagger', app, document);

  await app.listen(8080);
}
bootstrap();
