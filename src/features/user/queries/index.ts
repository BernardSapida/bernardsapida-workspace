export const GET_USER = `
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      fullname
      firstname
      lastname
      email
      emailVerified
      role
      image
      createdAt
      updatedAt
    }
  }
`;

export const GET_USERS = `
  query GetUsers($filters: UserFilters, $pagination: Pagination) {
    users(filters: $filters, pagination: $pagination) {
      users {
        id
        fullname
        firstname
        lastname
        email
        emailVerified
        role
        status
        image
        createdAt
        updatedAt
      }
      total
      page
      pageSize
      totalPages
    }
  }
`;

export const GET_USER_BY_EMAIL = `
  query GetUserByEmail($email: String!) {
    userByEmail(email: $email) {
      id
      fullname
      firstname
      lastname
      email
      emailVerified
      role
      image
      createdAt
      updatedAt
    }
  }
`;
