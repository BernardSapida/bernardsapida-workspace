import { db } from "~/server/db";
import type { QueryResolvers } from "../types";

export const userQueries: QueryResolvers = {
  user: async (_parent, args) => {
    return db.user.findUnique({
      where: { id: String(args.id) },
    });
  },

  users: async (_parent, args) => {
    // Pagination
    const page = args.pagination?.page ?? 1;
    const pageSize = args.pagination?.pageSize ?? 10;
    const skip = (page - 1) * pageSize;

    // Sorting
    const sortBy = args.pagination?.sortBy || "createdAt";
    const sortOrder = args.pagination?.sortOrder || "desc";

    // Build where clause from filters
    const where: any = {};

    // Apply filters
    if (args.filters?.search) {
      where.OR = [
        { fullname: { contains: args.filters.search, mode: "insensitive" } },
        { firstname: { contains: args.filters.search, mode: "insensitive" } },
        { lastname: { contains: args.filters.search, mode: "insensitive" } },
        { email: { contains: args.filters.search, mode: "insensitive" } },
      ];
    }

    if (args.filters?.statuses && args.filters.statuses.length > 0) {
      where.status = { in: args.filters.statuses };
    }

    if (args.filters?.roles && args.filters.roles.length > 0) {
      where.role = { in: args.filters.roles };
    }

    const [users, total] = await Promise.all([
      db.user.findMany({
        orderBy: {
          [sortBy]: sortOrder,
        },
        where,
        skip,
        take: pageSize,
      }),
      db.user.count({ where }),
    ]);

    return {
      users,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    };
  },
};
