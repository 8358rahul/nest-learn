import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport'; 


// test comment
async function bootstrap() {
  const app = await NestFactory.create(AppModule); 
  app.setGlobalPrefix('api');
  app.use(session({ 
    name:'my-session',
    secret:'my-secret',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000, }
  }))
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}
bootstrap();
