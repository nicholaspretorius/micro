const { gql } = require("apollo-server-express");

const Query = gql`
  type Query {
    status: String!
  }
`;

const Mutation = `
    type Mutation {
        _empty: String
    }
`;

const typeDefs = [Query, Mutation];

module.exports = typeDefs;
