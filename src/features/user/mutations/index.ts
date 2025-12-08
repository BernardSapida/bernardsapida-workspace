export const CREATE_USER = `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
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
  }
`;

export const UPDATE_USER = `
  mutation UpdateUser($id: String!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
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
  }
`;
