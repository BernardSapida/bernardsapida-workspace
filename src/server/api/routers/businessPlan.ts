import { z } from "zod";
import {
  CREATE_BUSINESS_PLAN,
  DELETE_BUSINESS_PLAN,
  UPDATE_BUSINESS_PLAN,
  UPDATE_BUSINESS_PLAN_NAME,
} from "~/features/business-plans/mutations";
import {
  GET_BUSINESS_PLAN,
  GET_BUSINESS_PLANS,
} from "~/features/business-plans/queries";
import type {
  CreateUpdateBusinessPlanResponse,
  DeleteBusinessPlanResponse,
} from "~/features/business-plans/response-types/mutation.types";
import type {
  GetBusinessPlanResponse,
  GetBusinessPlansResponse,
} from "~/features/business-plans/response-types/query.types";
import { graphqlRequest } from "~/lib/graphql/graphql-client";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const businessPlanRouter = createTRPCRouter({
  getBusinessPlans: protectedProcedure
    .input(
      z.object({
        filters: z.object({
          statuses: z.enum(["DRAFT", "COMPLETED"]).array(),
          search: z.string().optional(),
        }),
        pagination: z.object({
          page: z.number().nonnegative().optional(),
          pageSize: z.number().nonnegative().optional(),
          sortBy: z.string().optional(),
          sortOrder: z.enum(["asc", "desc"]).optional(),
        }),
      })
    )
    .query(async ({ input, ctx }) => {
      const data = await graphqlRequest<GetBusinessPlansResponse>(
        GET_BUSINESS_PLANS,
        {
          filters: input?.filters || null,
          pagination: input?.pagination || null,
        },
        ctx
      );
      return data.businessPlans;
    }),
  getBusinessPlan: protectedProcedure
    .input(z.object({ id: z.number().min(1) }))
    .query(async ({ input, ctx }) => {
      const data = await graphqlRequest<GetBusinessPlanResponse>(
        GET_BUSINESS_PLAN,
        input,
        ctx
      );
      return data.businessPlan;
    }),
  createBusinessPlan: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const data = await graphqlRequest<CreateUpdateBusinessPlanResponse>(
        CREATE_BUSINESS_PLAN,
        { name: input.name },
        ctx
      );
      return data.updateBusinessPlan;
    }),
  updateBusinessPlan: protectedProcedure
    .input(
      z.object({
        id: z.number().min(1),
        input: z.object({
          values: z.json(),
          finance: z.json(),
          progress: z.number().min(0).nonnegative(),
          status: z.enum(["DRAFT", "COMPLETED"]),
        }),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const data = await graphqlRequest<CreateUpdateBusinessPlanResponse>(
        UPDATE_BUSINESS_PLAN,
        input,
        ctx
      );
      return data.updateBusinessPlan;
    }),
  updateBusinessPlanName: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      console.log("INPUT", input);
      const data = await graphqlRequest<CreateUpdateBusinessPlanResponse>(
        UPDATE_BUSINESS_PLAN_NAME,
        input,
        ctx
      );
      return data.updateBusinessPlan;
    }),
  delete: protectedProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const data = await graphqlRequest<DeleteBusinessPlanResponse>(
        DELETE_BUSINESS_PLAN,
        input,
        ctx
      );
      return data.id;
    }),
});
