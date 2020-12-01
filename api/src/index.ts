import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { buildSchema } from 'type-graphql'
import { createConnection } from 'typeorm'

import { RegisterResolver } from './resolvers/user/Register'
import { LoginResolver } from './resolvers/user/Login'

const main = async () => {
    await createConnection()

    const schema = await buildSchema({
        resolvers: [RegisterResolver, LoginResolver],
    })

    const server = new ApolloServer({
        schema
    })
    const app = express()
    const path = '/graphql'

    server.applyMiddleware({ app, path })

    app.listen(4000, () => {
        console.log(`🌈 Server started at http://localhost:4000/${server.graphqlPath} 🦄`)
    })
}

main()
