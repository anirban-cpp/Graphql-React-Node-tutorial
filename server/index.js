const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { resolvers } = require("./schema/resolvers");

const server = new ApolloServer({ typeDefs, resolvers, context: ({ req }) => {
  return { req };
} }); // typeDefs contain the GraphQL type definition and resolvers contain the logic to query or mutate the data
      // the context is not required. But if we want something to accessible throughout our resolvers from here, like the req or authorised user and such we pass it and this can be accessed from the resolvers

// First we create a schema folder to hold information about typeDefs and resolvers

server.listen().then(({ url }) => {
  console.log(`Server is running at ${url} :)`);
});
