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
                collection.push('An error occured.')
                return collection[0]
            }
            return collection.push(cred.id, cred.role)
        })
        // returns the data according to patient id
        if (collection[0] && id) {
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
