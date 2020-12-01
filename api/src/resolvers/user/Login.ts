import { Resolver, Mutation, Arg } from 'type-graphql'
import bcrypt from 'bcrypt'

import { User } from '@entity/User'
import { LoginInput } from './login/LoginInput';

@Resolver()
export class LoginResolver {
    @Mutation(() => User, { nullable: true })
    async login(
        @Arg('data') {
            email,
            password
        }: LoginInput,
    ): Promise<User | null> {
        const user = await User.findOne({
            where: { email }
        })

        if (!user) {
            return null
        }

        const valid = await bcrypt.compare(password, user.password)

        if (!valid) {
            return null
        }

        return user;
    }
}
