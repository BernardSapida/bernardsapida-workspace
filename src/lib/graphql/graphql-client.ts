import { GraphQLClient } from "graphql-request";
import { env } from "~/env";
import type { TRPCContext } from "~/types/api.types";

const endpoint = `${env.NEXT_PUBLIC_BASE_URL}/api/graphql`;

export const graphqlClient = new GraphQLClient(endpoint, {
  credentials: "include",
  mode: "cors",
});

// Helper function with error handling
export async function graphqlRequest<T = any>(
  query: string,
  variables?: Record<string, any>,
  ctx?: TRPCContext
): Promise<T> {
  try {
    const cookie = ctx?.headers?.get("cookie") ?? "";

    // Set cookie, required by the server
    graphqlClient.setHeaders({ "Content-Type": "application/json", cookie });

    return await graphqlClient.request<T>(query, variables);
  } catch (error) {
    console.error("GraphQL Request Error:", error);
    throw error;
  }
}
