export const userTypeDefs = /* GraphQL */ `
  enum UserStatus {
    ACTIVE
    INACTIVE
    SUSPENDED
  }

  enum UserRole {
    ADMIN
    USER
  }

  type User {
    id: ID!
    fullname: String
    firstname: String
    lastname: String
    role: UserRole!
    email: String!
    emailVerified: Boolean!
    image: String
    status: UserStatus!
    createdAt: String!
    updatedAt: String!
  }

  input UserFilters {
    search: String
    statuses: [UserStatus!]
    roles: [UserRole!]
  }

  input UserUpdateFields {
    email: String
    fullname: String
    firstname: String
    lastname: String
    role: UserRole
    status: UserStatus
  }

  type PaginatedUsersResponse {
    users: [User!]!
    total: Int!
    page: Int!
    pageSize: Int!
    totalPages: Int!
  }

  extend type Query {
    user(id: ID!): User
    users(filters: UserFilters, pagination: Pagination): PaginatedUsersResponse!
  }

  extend type Mutation {
    updateUser(id: String!, input: UserUpdateFields!): User
  }
`;
