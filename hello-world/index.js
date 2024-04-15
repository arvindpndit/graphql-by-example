import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import fs from "fs";
import path from "path";
import Query from "./resolver/resovler.js";

const app = express();
app.use(cors(), express.json());

// Read the contents of schema.graphql -> typeDefs
const schemaPath = path.join("./schema/schema.graphql");

const typeDefs = fs.readFileSync(schemaPath, "utf8");
const resolvers = Query;

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
