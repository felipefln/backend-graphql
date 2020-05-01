import restify from 'restify'
import path from 'path'
import { GraphQLServer } from 'graphql-yoga'
import resolvers from './resolvers/resolvers'
import './database/db'

export const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname, 'schema.graphql'),
    resolvers
});

// server.start = onStart => {
//     server.listen(process.env.SERVER_PORT, '0.0.0.0', onStart)
//     console.log('=> started ')
//     return server
// }

server.start()