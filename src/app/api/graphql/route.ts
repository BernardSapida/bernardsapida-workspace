import { createYoga } from "graphql-yoga";
import { createContext } from "~/server/graphql/context";
import { schema } from "~/server/graphql/schema";

interface NextContext {
  params: Promise<Record<string, string>>;
}

const { handleRequest } = createYoga<NextContext>({
  fetchAPI: { Response },
  graphqlEndpoint: "/api/graphql",
  schema: schema as any,
  context: async ({ request }) => {
    return createContext(request);
  },
});

export {
  handleRequest as GET,
  handleRequest as POST,
  handleRequest as OPTIONS,
};
