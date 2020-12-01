import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'
import { Field, ObjectType, ID, Root } from 'type-graphql'
import { sign } from 'jsonwebtoken'

@ObjectType()
@Entity()
export class User extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column()
    firstName: string

    @Field()
    @Column()
    lastName: string

    @Field()
    @Column('text', { unique: true })
    email: string

    @Column()
    password: string

    @Field()
    @Column('text', { default: 'family' })
    role: string

    @Field()
    name(@Root() parent: User): string {
        return `${parent.firstName} ${parent.lastName}`
    }

    @Field()
    token(@Root() response: User): string {
        const accessToken = sign({ id: response.id, role: response.role }, 'Fj54j1MvNRh0ZLt')
        return accessToken
    }
}
