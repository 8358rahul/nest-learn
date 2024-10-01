import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';
import { ValidateCustomerMiddleware } from './middlewares/validate.customer.middleware';
import { ValidateCustomerAccountMiddleware } from './middlewares/validate.customer.account.middleware';
import { NextFunction } from 'express';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateCustomerMiddleware,ValidateCustomerAccountMiddleware,(req:Request,res:Response,next:NextFunction)=>{
      console.log("Request....");
      next();
    }).forRoutes(
      {
        path:"customers/:id",
        method:RequestMethod.GET
      },
      
      )
  }
}
