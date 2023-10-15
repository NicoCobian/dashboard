import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar opciones CORS
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:3000', // Permitir solicitudes desde este dominio
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
    credentials: true, // Permitir el uso de credenciales (cookies)
  };

  app.enableCors(corsOptions);

  await app.listen(3001);
}
bootstrap();
