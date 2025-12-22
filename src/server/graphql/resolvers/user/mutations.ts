import { db } from "~/server/db";
import type { MutationResolvers } from "../types";

export const userMutations: MutationResolvers = {
  updateUser: async (_parent, args) => {
    return db.user.update({
      where: { id: args.id },
      data: args.input,
    });
  },
};
