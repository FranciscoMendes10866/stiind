import { IsNumber } from 'class-validator'
import { Field, InputType } from 'type-graphql'

@InputType()
export class DeleteInput {
    @Field()
    @IsNumber()
    id: number
}
