export const CREATE_BUSINESS_PLAN = `
  mutation CreateBusinessPlan($name: String!) {
    createBusinessPlan(name: $name) {
      id
      name
      values
      finance
      progress
      status
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_BUSINESS_PLAN = `
  mutation UpdateBusinessPlan($id: Int!, $input: UpdateBusinessPlanInput!) {
    updateBusinessPlan(id: $id, input: $input) {
      id
      name
      values
      finance
      progress
      status
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_BUSINESS_PLAN_NAME = `
  mutation UpdateBusinessPlanName($id: Int!, $name: String!) {
    updateBusinessPlanName(id: $id, name: $name) {
      id
      name
      values
      progress
      status
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_BUSINESS_PLAN = `
  mutation DeleteBusinessPlan($id: Int!) {
    deleteBusinessPlan(id: $id) {
      id
      name
      values
      progress
      status
      createdAt
      updatedAt
    }
  }
`;
