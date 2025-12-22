import type { BusinessPlan } from "generated/prisma/client";
import type { PaginatedBusinessPlansResponse } from "./business-plan.types";

export interface GetBusinessPlanResponse {
  businessPlan: BusinessPlan;
}

export interface GetBusinessPlansResponse {
  businessPlans: PaginatedBusinessPlansResponse;
}
