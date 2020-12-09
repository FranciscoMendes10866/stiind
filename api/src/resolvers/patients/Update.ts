import {
    Resolver, Authorized, Ctx, Arg, Mutation,
} from 'type-graphql'
import { verify } from 'jsonwebtoken'

import { Patients } from '@entity/Patients'
import { RequestContext } from '@interfaces/RequestContext'
import { TokenInterface } from '@interfaces/TokenInterface'
import { UpdateInput } from './update/UpdateInput'

@Resolver()
export class UpdateResolver {
    @Authorized()
    @Mutation(() => Patients, { nullable: true })
    async Update(
        @Arg('data') {
            id,
            first_name,
            last_name,
            age,
            gender,
            maritual_status,
            picture,
            location,
            caregiver_id,
            relative_id
        }: UpdateInput,
        @Ctx() ctx: RequestContext,
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
        // updates a given elderly if the user is an admin
        if (collection[1] === 'Admin' && id) {
            const user = await Patients.findOne(id)
            if (!user) {
                return null
            }
            const updated = await Patients.merge(user, {
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
            return updated
        }
        return null
    }
}
