import {
    Entity, PrimaryGeneratedColumn, Column, BaseEntity,
} from 'typeorm'
import {
    Field, ObjectType, ID, Root,
} from 'type-graphql'

@ObjectType()
@Entity()
export class Patients extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number

    @Field()
    @Column()
    first_name: string

    @Field()
    @Column()
    last_name: string

    @Field()
    @Column()
    age: number

    @Field()
    @Column()
    gender: string

    @Field()
    @Column()
    picture: string

    @Field()
    @Column()
    maritual_status: string

    @Field()
    @Column()
    location: string

    @Field(() => ID)
    @Column()
    relative_id: number

    @Field(() => ID)
    @Column()
    caregiver_id: number

    @Field()
    full_name(@Root() patient: Patients): string {
        return `${patient.first_name} ${patient.last_name}`
    }

}
