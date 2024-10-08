import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumber, IsNumberString, ValidateNested } from "class-validator";
import { CreateAddressDto } from "./createAddress.dto";
import { Type } from "class-transformer";

export class CreateCustomerDto{
    @IsEmail()
    email:string;

    @IsNumber()
    @IsNotEmpty()
    id:number;

    @IsNotEmpty()
    name:string;

    @IsNotEmptyObject()
    @ValidateNested()
    @Type(()=>CreateAddressDto) 
    address:CreateAddressDto;
}