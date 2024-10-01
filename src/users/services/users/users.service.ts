import {  HttpException, HttpStatus, Injectable  } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm';
import { User  } from 'src/typeorm/User';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { SerializedUser } from 'src/users/types';
import { hashPassword } from 'src/utils/bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private readonly userRepository:Repository<User>){}
 
 
    getAllUsers(){ 
        const user =  this.userRepository.find(); 
        return user;
    } 
    findUserByUsername(username:string){
        return this.userRepository.findOne({ where: { username } });
    }

    findUserById(id:number){ 
        return this.userRepository.findOne({ where: { id } });
        
    }

    createUser(createUserDto:CreateUserDto){ 
        const password = hashPassword(createUserDto.password);
  
        const newUser = this.userRepository.create({...createUserDto,password});
        this.userRepository.save(newUser);
        return new SerializedUser(newUser);

    };

    

 
}
