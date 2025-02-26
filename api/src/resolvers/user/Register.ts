import {
	Resolver, Mutation, Arg,
} from 'type-graphql'
import { hash } from 'bcrypt'

import { User } from '@entity/User'
import { RegisterInput } from './register/RegisterInput'

@Resolver()
export class RegisterResolver {
    @Mutation(() => User)
    async register(
        @Arg('data') {
        	first_name,
        	last_name,
        	email,
        	password,
        	role,
        }: RegisterInput,
    ): Promise<User> {
    	const hashedPassword = await hash(password, 4)

    	let setRole
    	if (role === null) {
    		setRole = 'relative'
    	} else {
    		setRole = role
    	}

    	const user = await User.create({
    		first_name,
    		last_name,
    		email,
    		role: setRole,
    		password: hashedPassword,
    	}).save()

    	return user
    }
}
