import { Controller, Get, Post, Request, Session, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard, LocalAuthGuard } from 'src/auth/utils/LocalGuard';

@Controller('auth')
export class AuthController {

    @UseGuards(LocalAuthGuard)
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

    @UseGuards(AuthenticatedGuard)
    @Get('status')
    async getStatus(@Session() session:Record<string,any>){
        return session;
    }
}
