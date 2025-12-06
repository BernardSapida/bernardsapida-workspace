import type { BusinessPlan } from "generated/prisma/client";

export interface UpdateBusinessPlanResponse {
  updateBusinessPlan: BusinessPlan;
}

export interface DeleteBusinessPlanResponse {
  id: number;
}
