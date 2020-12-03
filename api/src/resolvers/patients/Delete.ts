import {
    Resolver, Authorized, Ctx, Arg, Mutation,
} from 'type-graphql'
import { verify } from 'jsonwebtoken'

import { Patients } from '@entity/Patients'
import { RequestContext } from '@interfaces/RequestContext'
import { TokenInterface } from '@interfaces/TokenInterface'
import { DeleteInput } from './delete/DeleteInput'

@Resolver()
export class DeleteResolver {
    @Authorized()
    @Mutation(() => Boolean)
    async Delete(
        @Arg('data') {
            id
        }: DeleteInput,
        @Ctx() ctx: RequestContext,
    ): Promise<Boolean> {
        // gets the token and stores it into the collection array
        const token = ctx.req.headers.authorization.split(' ')[1]
        const collection = []
        verify(token, 'Fj54j1MvNRh0ZLt', (err, cred: TokenInterface) => {
            if (err) {
                return null
            }
            return collection.push(cred.id, cred.role)
        })
        // deletes a given elderly if the user is an admin
        if (collection[1] === 'admin' && id) {
            const exist = await Patients.findOne(id)
            if (!exist) {
                return false
            }
            await Patients.delete(id)
            return true
        }
        return false
    }
}
