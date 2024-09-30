import { ClassSerializerInterceptor, Controller, Get, Inject, Param, UseInterceptors } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(@Inject("USER_SERVICE") private readonly userService:UsersService)
    {}

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('')
    getAllUsers(){ 
        return this.userService.getAllUsers();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('/:username')
    findUserByUsername(@Param('username') username:string){
        return this.userService.findUserByUsername(username);
    }
}
