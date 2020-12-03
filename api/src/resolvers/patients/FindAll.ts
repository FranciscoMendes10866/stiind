import {
    Resolver, Query, Authorized, Ctx,
} from 'type-graphql'
import { verify } from 'jsonwebtoken'

import { Patients } from '@entity/Patients'
import { RequestContext } from '@interfaces/RequestContext'
import { TokenInterface } from '@interfaces/TokenInterface'

@Resolver()
export class FindAllResolver {
    @Authorized()
    @Query(() => [Patients], { nullable: true })
    async FindAll(
        @Ctx() ctx: RequestContext,
    ): Promise<Patients[] | null> {
        // gets the token and stores it into the collection array
        const token = ctx.req.headers.authorization.split(' ')[1]
        const collection = []
        verify(token, 'Fj54j1MvNRh0ZLt', (err, cred: TokenInterface) => {
            if (err) {
                return null
            }
            return collection.push(cred.id, cred.role)
        })
        // returns the data according to the user role
        if (collection[1] === 'admin') {
            const patients = await Patients.find()
            return patients
        } else if (collection[1] === 'caregiver') {
            const patients = await Patients.find({ where: { caregiver_id: collection[0] } })
            return patients
        } else {
            const patients = await Patients.find({ where: { relative_id: collection[0] } })
            return patients
        }
    }
}
