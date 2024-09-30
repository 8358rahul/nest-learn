import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/createCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}
  // get all customers
  @Get()
  getAllCustomers() {
    return this.customerService.getAllCustomers();
  }
  // get customer
  @Get(':id')
  getCustomers(@Param('id', ParseIntPipe) id: number) {
    const cus = this.customerService.findCustomersById(id);
    if(cus)return cus;
    else throw new HttpException('Customer not found', HttpStatus.BAD_REQUEST);
  }

  // create a new customer
  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomer(@Body()createCustomerDto:CreateCustomerDto){
    return this.customerService.createCustomer(createCustomerDto);
  }
  
}
