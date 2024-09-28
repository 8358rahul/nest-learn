import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {

     users = [
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
    findCustomersById(id:number){
        return this.users.find(user => user.id === id);
    }
}
