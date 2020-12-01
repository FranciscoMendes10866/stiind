import {
	Resolver, Query, Authorized, Ctx,
} from 'type-graphql'
import { verify } from 'jsonwebtoken'

import { RequestContext } from '@interfaces/RequestContext'
import { TokenInterface } from '@interfaces/TokenInterface'

@Resolver()
export class TestResolver {
    @Authorized()
    @Query(() => String)
	async test(
        @Ctx() ctx: RequestContext,
	) {
		const token = ctx.req.headers.authorization.split(' ')[1]
		const arr = []
		verify(token, 'Fj54j1MvNRh0ZLt', (err, cred: TokenInterface) => {
			if (err) {
				return arr.push('An error occured.')
			}
			return arr.push(cred.id)
		})
		return arr[0]
	}
}
