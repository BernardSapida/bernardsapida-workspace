export const businessPlanTypeDefs = /* GraphQL */ `
  enum BusinessPlanStatus {
    DRAFT
    COMPLETED
  }

  scalar JSON
  scalar DATE

  type BusinessPlan {
    id: ID!
    name: String!
    values: JSON!
    finance: JSON!
    progress: String
    status: BusinessPlanStatus!
    userId: String!
    createdAt: DATE!
    updatedAt: DATE!
  }

  input BusinessPlanFilters {
    statuses: [BusinessPlanStatus!]
    search: String
  }

  input UpdateBusinessPlanInput {
    values: JSON!
    finance: JSON!
    progress: Int!
    status: BusinessPlanStatus!
  }

  input UpdateBusinessPlanNameInput {
    name: String!
  }

  type PaginatedBusinessPlansResponse {
    businessPlans: [BusinessPlan!]!
    total: Int!
    page: Int!
    pageSize: Int!
    totalPages: Int!
  }

  extend type Query {
    businessPlan(id: Int!): BusinessPlan
    businessPlans(
      filters: BusinessPlanFilters
      pagination: Pagination
    ): PaginatedBusinessPlansResponse!
  }

  extend type Mutation {
    createBusinessPlan(name: String!): BusinessPlan!
    updateBusinessPlan(id: Int!, input: UpdateBusinessPlanInput!): BusinessPlan!
    updateBusinessPlanName(id: Int!, name: String!): BusinessPlan!
    deleteBusinessPlan(id: Int!): BusinessPlan!
  }
`;
