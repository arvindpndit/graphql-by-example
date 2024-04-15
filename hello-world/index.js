import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";

import { expressMiddleware } from "@apollo/server/express4";

const app = express();
app.use(cors(), express.json());

//this is for the client
const typeDefs = `
  type Query {
    hello: String
    say(name: String): String
    sum(a: Int!, b: Int!): Int!
  }`;

//what to do for your query
const resolvers = {
  Query: {
    hello: () => {
      return "Hey, I am a GraphQL server";
    },

    say: (_, { name }) => {
      return `Hey ${name}! I am a GraphQL server`;
    },

    sum: (_, { a, b }) => {
      return a + b;
    },
  },
};

const initServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  app.use("/graphql", expressMiddleware(server));
  app.listen(8000, () => console.log(`app is running on port 8000`));
};

initServer();
