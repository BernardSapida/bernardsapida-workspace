import type { BusinessPlan } from "generated/prisma/client";

export interface CreateUpdateBusinessPlanResponse {
  updateBusinessPlan: BusinessPlan;
}

export interface DeleteBusinessPlanResponse {
  id: number;
}
