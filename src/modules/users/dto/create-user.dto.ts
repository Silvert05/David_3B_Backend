import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty({description:'Nombre de usuario'})
    @IsString({message:'El nombre deben ser caracteres'})
    @IsNotEmpty({message:'El nombre  no debe  estar vacio '})
    name:string;

    @ApiProperty({description:'Correo electronico'})
    @IsEmail({},{message:'El formato debe  ser de correo'})
    @IsNotEmpty({message:'El correo no debe de estar vacio '})
    email:string;


    @ApiProperty({description:'Contraseña de usuario'})
    @MinLength(6,{message:'La contraseña debe de tener como minimo 6 caracteres'})
    @IsString({message:'La contraseña no debe  de ser una cadena  '})
    password:string;



}
