import { businessPlanTypeDefs } from "./businessPlan";
import { sharedTypeDefs } from "./shared";
import { userTypeDefs } from "./user";

export const typeDefs = /* GraphQL */ `
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  ${sharedTypeDefs}
  ${userTypeDefs}
  ${businessPlanTypeDefs}
`;
