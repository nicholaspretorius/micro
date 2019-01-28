const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./types");
const resolvers = require("./resolvers");

const schema = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: "http://localhost:4000/graphql",
    settings: {
      "editor.theme": "dark"
    }
  }
});

module.exports = schema;
