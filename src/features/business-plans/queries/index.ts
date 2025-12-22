export const GET_BUSINESS_PLAN = `
  query GetBusinessPlan($id: Int!) {
    businessPlan(id: $id) {
      id
      values
      finance
    }
  }
`;

export const GET_BUSINESS_PLANS = `
  query GetBusinessPlans($filters: BusinessPlanFilters, $pagination: Pagination) {
    businessPlans(filters: $filters, pagination: $pagination) {
      businessPlans {
        id
        name
        progress
        status
        createdAt
      }
      total
      page
      pageSize
      totalPages
    }
  }
`;
