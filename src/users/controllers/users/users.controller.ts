import { Body, ClassSerializerInterceptor, Controller, Get, Inject, Param, ParseIntPipe, Post, UseFilters, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { UserNotFondException } from 'src/users/exceptions/UserNotFound.exception';
import { HttpExceptionFilter } from 'src/users/filter/http-exception.filter';
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
    @UseFilters(HttpExceptionFilter)
    @Get('/:username')
    findUserByUsername(@Param('username') username:string){
        const user =  this.userService.findUserByUsername(username);
        if(user) return user;
        else throw new UserNotFondException();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @UseFilters(HttpExceptionFilter)
    @Get('/:id')
    findUserById(@Param('id') id:number){ 
        const user = this.userService.findUserById(id);
        if(user) return user;
        else throw new UserNotFondException();
    }

    // save user to database
    @Post('create')
    @UsePipes(ValidationPipe)
    createUser(@Body() createUserDto:CreateUserDto){ 
        return this.userService.createUser(createUserDto);
    }
}
