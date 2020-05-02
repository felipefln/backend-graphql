import restify from 'restify'
import express from 'express'
import path from 'path'
import { GraphQLServer } from 'graphql-yoga'
import resolvers from './resolvers/resolvers'
import './database/db'
import routes from './routes'
const app = express()

export const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
});

// server.start = onStart => {
//     server.listen(process.env.SERVER_PORT, '0.0.0.0', onStart)
//     console.log('=> started ')
//     return server
// }
app.use(express.json())
app.use(routes)
app.listen(3000)
server.start()