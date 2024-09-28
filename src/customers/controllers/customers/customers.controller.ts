import { Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Req, Res } from '@nestjs/common';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}
  @Get(':id')
  getCustomers(@Param('id', ParseIntPipe) id: number) {
    const cus = this.customerService.findCustomersById(id);
    if(cus)return cus;
    else throw new HttpException('Customer not found', HttpStatus.BAD_REQUEST);
  }
}
