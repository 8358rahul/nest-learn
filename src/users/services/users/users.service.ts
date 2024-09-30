import {  HttpException, HttpStatus, Injectable  } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
    private users:User[] = [
        {
            username: 'john',
            password: 'doe',
        },
        {
            username: 'jane',
            password: 'doe',
        },
        {
            username: 'alice',
            password: 'alice',
        }
    ];
 
    getAllUsers(){
        // return this.users.map((user)=>plainToClass(SerializedUser,user));
        return this.users.map((user)=> new SerializedUser(user));
    }
 
    findUserByUsername(username:string){
       const user = this.users.find(user => user.username === username);
       if(user)return new SerializedUser(user);
       else throw new HttpException("User not found",HttpStatus.BAD_REQUEST);
    }
}
