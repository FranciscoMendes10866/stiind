import { Length, IsNumber, IsString } from 'class-validator'
import { Field, InputType } from 'type-graphql'

@InputType()
export class CreateInput {
    @Field()
    @Length(1, 30)
    first_name: string

    @Field()
    @Length(1, 30)
    last_name: string

    @Field()
    @IsNumber()
    age: number

    @Field()
    @Length(1, 30)
    gender: string

    @Field()
    @IsString()
    picture: string

    @Field()
    @Length(1, 30)
    maritual_status: string

    @Field()
    @Length(1, 30)
    location: string

    @Field()
    @IsNumber()
    relative_id: number

    @Field()
    @IsNumber()
    caregiver_id: number
}
