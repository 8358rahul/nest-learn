import { Controller, Get, Post, Request, Session, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

    @UseGuards(AuthGuard("local"))
    @Post('login')
    async login(@Request() req:any) { 
        return req.user;
    }

    @Get('')
    async getAuthSession(@Session() session:Record<string,any>){
        console.log(session.id);
        session.authenticated = true;
        return session;
    }
}
