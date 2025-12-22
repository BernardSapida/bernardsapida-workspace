import { z } from "zod";
import { UPDATE_USER } from "~/features/user/mutations";
import { GET_USER, GET_USERS } from "~/features/user/queries";
import type { UpdateUserResponse } from "~/features/user/response-types/mutation.types";
import type {
	GetUserResponse,
	GetUsersResponse,
} from "~/features/user/response-types/query.types";
import { graphqlRequest } from "~/lib/graphql/graphql-client";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
	getUsers: protectedProcedure
		.input(
			z.object({
				filters: z.object({
					statuses: z.enum(["ACTIVE", "INACTIVE", "SUSPENDED"]).array(),
					roles: z.enum(["USER", "ADMIN"]).array(),
					search: z.string().optional(),
				}),
				pagination: z.object({
					page: z.number().nonnegative().optional(),
					pageSize: z.number().nonnegative().optional(),
					sortBy: z.string().optional(),
					sortOrder: z.enum(["asc", "desc"]).optional(),
				}),
			}),
		)
		.query(async ({ input }) => {
			const data = await graphqlRequest<GetUsersResponse>(GET_USERS, {
				filters: input?.filters || null,
				pagination: input?.pagination || null,
			});
			return data.users;
		}),
	getUser: protectedProcedure
		.input(z.object({ id: z.string().min(1) }))
		.query(async ({ input }) => {
			const data = await graphqlRequest<GetUserResponse>(GET_USER, input);
			return data.user;
		}),
	updateUser: protectedProcedure
		.input(
			z.object({
				id: z.string().min(1),
				input: z.object({
					firstname: z.string().min(1),
					lastname: z.string().min(1),
					role: z.enum(["USER", "ADMIN"]),
					email: z.email(),
				}),
			}),
		)
		.mutation(async ({ input }) => {
			const data = await graphqlRequest<UpdateUserResponse>(UPDATE_USER, input);
			return data.updateUser;
		}),
});
