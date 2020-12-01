import { IsEmail, Length } from "class-validator";
import { Field, InputType } from "type-graphql";
import { IsEmailAlreadyExist } from "./isEmailAlreadyExist";

@InputType()
export class RegisterInput {
    @Field()
    @Length(1, 30) 
    firstName: string

    @Field()
    @Length(1, 30) 
    lastName: string

    @Field()
    @IsEmail()
    @IsEmailAlreadyExist({ message: 'Email already in use.' })
    email: string

    @Field()
    password: string

    @Field({ nullable: true })
    role?: string
    
}
