import { GraphQLError } from "graphql";
import { db } from "~/server/db";
import type { GraphQLContext } from "~/server/graphql/context";

interface QueryArgs {
  id: number;
  filters?: {
    statuses?: string[];
    search?: string;
  };
  pagination?: {
    page?: number;
    pageSize?: number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
  };
}

export const businessPlanQueries = {
  businessPlan: async (
    _parent: unknown,
    args: QueryArgs,
    context: GraphQLContext
  ) => {
    if (!context.userId) {
      throw new GraphQLError("Unauthorized", {
        extensions: { code: "UNAUTHORIZED" },
      });
    }

    return db.businessPlan.findUnique({
      where: {
        id: args.id,
        userId: context.userId, // Ensure user owns this plan
      },
    });
  },

  businessPlans: async (
    _parent: unknown,
    args: QueryArgs,
    context: GraphQLContext
  ) => {
    if (!context.userId) {
      throw new GraphQLError("Unauthorized", {
        extensions: { code: "UNAUTHORIZED" },
      });
    }

    // Pagination
    const page = args.pagination?.page ?? 1;
    const pageSize = args.pagination?.pageSize ?? 10;
    const skip = (page - 1) * pageSize;

    // Sorting
    const sortBy = args.pagination?.sortBy || "createdAt";
    const sortOrder = args.pagination?.sortOrder || "desc";

    // Build where clause
    const where: any = {
      userId: context.userId, // Only user's business plans
    };

    // Apply filters
    if (args.filters?.search) {
      where.name = {
        contains: args.filters.search,
        mode: "insensitive",
      };
    }

    if (args.filters?.statuses && args.filters.statuses.length > 0) {
      where.status = { in: args.filters.statuses };
    }

    const [businessPlans, total] = await Promise.all([
      db.businessPlan.findMany({
        orderBy: {
          [sortBy]: sortOrder,
        },
        where,
        skip,
        take: pageSize,
      }),
      db.businessPlan.count({ where }),
    ]);

    return {
      businessPlans,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    };
  },
};
