import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto { 
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @MinLength(10)
  password: string;
 
  @IsNotEmpty()
  @IsEmail()
  email: string;

}