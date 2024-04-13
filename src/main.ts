import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction } from 'express';
import { globalAgent } from 'http';

function globalMiddleWare(req: Request, res: Response, next: NextFunction){
  console.log("I am inside middleware")
  next()
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 //app.use(globalMiddleWare)
  await app.listen(3000);
}
bootstrap();
