import { businessPlanMutations } from "./businessPlan/mutations";
import { businessPlanQueries } from "./businessPlan/queries";
import { userMutations } from "./user/mutations";
import { userQueries } from "./user/queries";

export const resolvers = {
  Query: {
    ...userQueries,
    ...businessPlanQueries,
  },
  Mutation: {
    ...userMutations,
    ...businessPlanMutations,
  },
};
