import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import { resolvers } from './resolvers'
import { defaultPlaygroundQuery } from './defaultPlaygroundQuery'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: resolvers,
  context: {
    prisma,
  },
} as any)

server.start({ defaultPlaygroundQuery }, () => console.log('Server is running on http://localhost:4000'))
