import {
    Resolver, Mutation, Arg, Authorized, Ctx,
} from 'type-graphql'
import { verify } from 'jsonwebtoken'

import { CreateInput } from './create/CreateInput'
import { Patients } from '@entity/Patients'
import { TokenInterface } from '@interfaces/TokenInterface'
import { RequestContext } from '@interfaces/RequestContext'

@Resolver()
export class CreatePatientResolver {
    @Authorized()
    @Mutation(() => Patients, { nullable: true })
    async CreatePatient(
        @Arg('data') {
            first_name,
            last_name,
            age,
            gender,
            maritual_status,
            picture,
            location,
            caregiver_id,
            relative_id
        }: CreateInput,
        @Ctx() ctx: RequestContext
    ): Promise<Patients | null> {
        // gets the token and stores it into the collection array
        const token = ctx.req.headers.authorization.split(' ')[1]
        const collection = []
        verify(token, 'Fj54j1MvNRh0ZLt', (err, cred: TokenInterface) => {
            if (err) {
                return null
            }
            return collection.push(cred.id, cred.role)
        })
        // creates a new elderly if the user is an admin
        if (collection[1] === 'Admin') {
            const patient = await Patients.create({
                first_name,
                last_name,
                age,
                gender,
                maritual_status,
                picture,
                location,
                caregiver_id,
                relative_id
            }).save()
            return patient
        }
        return null
    }
}
