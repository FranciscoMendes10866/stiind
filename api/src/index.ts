import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { buildSchema } from 'type-graphql'
import { createConnection } from 'typeorm'

import { RegisterResolver } from '@user/Register'
import { LoginResolver } from '@user/Login'
import { CreatePatientResolver } from '@patients/Create'
import { FindAllResolver } from '@patients/FindAll'
import { FindOneResolver } from '@patients/FindOne'
import { DeleteResolver } from '@patients/Delete'
import { UpdateResolver } from '@patients/Update'

(async () => {
	await createConnection()

	const schema = await buildSchema({
		resolvers: [
			RegisterResolver,
			LoginResolver,
			CreatePatientResolver,
			FindAllResolver,
			FindOneResolver,
			DeleteResolver,
			UpdateResolver
		],
		authChecker: ({ context: { req } }) => {
			const bearer = req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer'
			return !!bearer
		},
	})

	const server = new ApolloServer({
		schema,
		context: ({ req }: any) => ({ req }),
	})

	const app = express()
	const path = '/graphql'
	const corsOptions = {
		origin: '*',
		methods: 'POST',
		exposedHeaders: 'Authorization',
		allowedHeaders: 'Authorization',
		credentials: true,
	}

	server.applyMiddleware({ app, cors: corsOptions, path })

	app.listen(4000, () => {
		console.log(`🌈 Server started at http://localhost:4000${server.graphqlPath} 🦄`)
	})
})()
