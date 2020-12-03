import { IsNumber } from 'class-validator'
import { Field, InputType } from 'type-graphql'

@InputType()
export class FindOneInput {
    @Field()
    @IsNumber()
    id: number
}
