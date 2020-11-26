import "reflect-metadata"; // to enable Decorator Metadata
import { UserResolver } from './resolvers/UserResolver';
import * as express from 'express';
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm"
import { ApolloServer } from 'apollo-server-express';

const startServer = async () => {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [UserResolver]
  });

  const server = new ApolloServer({
    schema
    // engine: {
    //   reportSchema: true,
    //   graphVariant: "current"
    // }
  });

  const app = express();
  server.applyMiddleware({ app, cors: false });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();