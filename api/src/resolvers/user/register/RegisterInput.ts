import { IsEmail, Length } from 'class-validator'
import { Field, InputType } from 'type-graphql'
import { IsEmailAlreadyExist } from './isEmailAlreadyExist'

@InputType()
export class RegisterInput {
    @Field()
    @Length(1, 30)
    first_name: string

    @Field()
    @Length(1, 30)
    last_name: string

    @Field()
    @IsEmail()
    @IsEmailAlreadyExist({ message: 'Email already in use.' })
    email: string

    @Field()
    password: string

    @Field({ nullable: true })
    role?: string
}
