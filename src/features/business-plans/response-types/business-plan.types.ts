import type { BusinessPlan, BusinessPlanStatus } from "generated/prisma/client";

export interface PaginatedBusinessPlansResponse {
  businessPlans: BusinessPlan[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface BusinessPlanFilters {
  statuses?: BusinessPlanStatus[];
  search?: string;
}
