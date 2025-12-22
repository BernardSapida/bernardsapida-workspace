export const sharedTypeDefs = /* GraphQL */ `
  enum SortOrder {
    asc
    desc
  }

  input Pagination {
    page: Int
    pageSize: Int
    sortBy: String
    sortOrder: SortOrder
  }
`;
