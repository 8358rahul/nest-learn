import { Controller, Get, Req, Res } from '@nestjs/common';
import { Response,Request } from 'express';

@Controller('payment')
export class PaymentController {
    @Get()
    getPayment(@Req() req: Request, @Res() res:Response) { 
        const {page,count} = req.query;
        if(!count && !page) {
            return res.status(400).send('No page and count provided');
        }else{
            return res.status(200).send('Payment page and count provided');
        }
    }
}
