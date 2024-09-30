import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/createCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {

    private customers:Customer[] = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@gmai.com',
        },
        {
            id: 2,
            name: 'Jane Doe',
            email: 'janedo@gmail.com',
        },
        {
            id: 3,
            name: 'Alice',
            email: 'alice@gmail.com',
        }
     ];

    getAllCustomers(){
            return this.customers;
     }

    findCustomersById(id:number){
        return this.customers.find(user => user.id === id);
    }

    createCustomer(createCustomerDto:CreateCustomerDto){
        this.customers.push(createCustomerDto);
        return createCustomerDto;
    }
}
