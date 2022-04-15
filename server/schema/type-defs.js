const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User!]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheaters: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = INDIA
  }

  input UpdateUsernameInput {
    id: ID!
    newUsername: String!
  }

  input AddMovieInput {
    name: String!
    yearOfPublication: String!
    isInTheaters: Boolean!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(input: UpdateUsernameInput!): User
    deleteUser(id: ID!): User
    addMovie(input: AddMovieInput!): Movie
  }

  enum Nationality {
    CANADA
    BRAZIL
    INDIA
    GERMANY
    CHILE
    BELGIUM
  }

`;

/*

  We will use union for getting the error from server as well

  type Query {
    users: UserResult
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  type UsersSuccessfulResult {
    users: [User!]!
  }

  type UsersErrorResult {
    message: String!
  }

  union UsersResult = UsersSuccessfulResult | UsersErrorResult

*/

module.exports = { typeDefs };
