import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {

    constructor(@Inject("USER_SERVICE") private readonly userService: UsersService) { }
    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findUserByUsername(username);
        const matched = comparePassword(password, user.password);

        if (user) {
            if (matched) { 
                return user;
            } else { 
                throw new UnauthorizedException('Invalid credentials');
            }
        } 

        throw new UnauthorizedException('Invalid credentials');

    }
}
