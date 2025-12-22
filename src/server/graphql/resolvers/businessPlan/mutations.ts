import { GraphQLError } from "graphql";
import { db } from "~/server/db";
import type { GraphQLContext } from "~/server/graphql/context";

interface CreateBusinessPlanArgs {
  name: string;
}

interface UpdateBusinessPlanArgs {
  id: number;
  input: {
    values: any;
    finance: any;
    status: "DRAFT" | "COMPLETED";
    progress: number;
  };
}

interface UpdateBusinessPlanNameArgs {
  id: number;
  name: string;
}

export const businessPlanMutations = {
  createBusinessPlan: async (
    _parent: unknown,
    args: CreateBusinessPlanArgs,
    context: GraphQLContext
  ) => {
    if (!context.userId) {
      throw new GraphQLError("Unauthorized", {
        extensions: { code: "UNAUTHORIZED" },
      });
    }

    const response = await db.businessPlan.create({
      data: {
        name: args.name,
        status: "DRAFT",
        progress: 0,
        values: {},
        userId: context.userId, // Attach to logged-in user
      },
    });

    return response;
  },

  updateBusinessPlan: async (
    _parent: unknown,
    args: UpdateBusinessPlanArgs,
    context: GraphQLContext
  ) => {
    if (!context.userId) {
      throw new GraphQLError("Unauthorized", {
        extensions: { code: "UNAUTHORIZED" },
      });
    }

    // Verify ownership before update
    const businessPlan = await db.businessPlan.findUnique({
      where: { id: args.id },
      select: { userId: true },
    });

    if (!businessPlan || businessPlan.userId !== context.userId) {
      throw new GraphQLError("Business plan not found or unauthorized", {
        extensions: { code: "FORBIDDEN" },
      });
    }

    return await db.businessPlan.update({
      where: { id: args.id },
      data: {
        values: args.input.values,
        finance: args.input.finance,
        status: args.input.status,
        progress: args.input.progress,
      },
    });
  },

  updateBusinessPlanName: async (
    _parent: unknown,
    args: UpdateBusinessPlanNameArgs,
    context: GraphQLContext
  ) => {
    if (!context.userId) {
      throw new GraphQLError("Unauthorized", {
        extensions: { code: "UNAUTHORIZED" },
      });
    }

    // Verify ownership before update
    const businessPlan = await db.businessPlan.findUnique({
      where: { id: args.id },
      select: { userId: true },
    });

    if (!businessPlan || businessPlan.userId !== context.userId) {
      throw new GraphQLError("Business plan not found or unauthorized", {
        extensions: { code: "FORBIDDEN" },
      });
    }

    return await db.businessPlan.update({
      where: { id: args.id },
      data: { name: args.name },
    });
  },

  deleteBusinessPlan: async (
    _parent: unknown,
    args: UpdateBusinessPlanNameArgs,
    context: GraphQLContext
  ) => {
    if (!context.userId) {
      throw new GraphQLError("Unauthorized", {
        extensions: { code: "UNAUTHORIZED" },
      });
    }

    return await db.businessPlan.delete({
      where: { id: args.id },
    });
  },
};
