import { GraphQLDate, GraphQLJSON } from "graphql-scalars";
import { createSchema } from "graphql-yoga";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

export const schema = createSchema({
  typeDefs,
  resolvers: {
    ...resolvers,
    JSON: GraphQLJSON, // Add JSON scalar resolver
    DATE: GraphQLDate,
  },
});
