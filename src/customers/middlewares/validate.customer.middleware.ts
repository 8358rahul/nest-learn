import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction,Request,Response } from "express";

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware{
    use(req:Request,res:Response,next:NextFunction){
       console.log('ValidateCustomerMiddleware');
       const {authorization} = req.headers;
       if(authorization!=='1234'){
        return res.status(403).send({message:'Forbidden'});
       }
       next(); 
    }
}