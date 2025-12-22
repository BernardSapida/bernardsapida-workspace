import type { YogaInitialContext } from "graphql-yoga";
import { auth } from "../better-auth";

export interface GraphQLContext extends YogaInitialContext {
  userId?: string; // User ID from session
  session?: any; // Full session object if needed
}

export async function createContext(
  req: Request
): Promise<Omit<GraphQLContext, keyof YogaInitialContext>> {
  // Get session from Next.js auth
  const session = await auth.api.getSession({
    headers: req.headers,
  });

  return {
    userId: session?.session?.userId,
    session,
  };
}
