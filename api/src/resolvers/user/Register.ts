import { Resolver, Query, Mutation, Arg } from "type-graphql"
import bcrypt from 'bcrypt'

import { User } from "@entity/User"
import { RegisterInput } from "./register/RegisterInput";

@Resolver()
export class RegisterResolver {
    @Query(() => String)
    async hello() {
        return await 'Hello World';
    }

    @Mutation(() => User)
    async register(
        @Arg('data') {
            firstName, 
            lastName, 
            email, 
            password,
            role
        }: RegisterInput
    ): Promise<User> {
        const hashedPassword = await bcrypt.hash(password, 4)
        
        let setRole
        if (role === null) {
            setRole = 'family'
        } else {
            setRole = role
        }
        
        const user = await User.create({
            firstName,
            lastName,
            email,
            role: setRole,
            password: hashedPassword
        }).save()

        return user;
    }
}
