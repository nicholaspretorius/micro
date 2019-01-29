const { gql } = require("apollo-server-express");

const Query = gql`
  type Query {
    status: String!
    mails: [Mail]
    mail(subject: String!, receiver: String!): Mail
  }

  type Mail {
    subject: String
    receiver: String
    content: String
    _id: String
  }
`;

const Mutation = gql`
  type Mutation {
    mail(subject: String!, receiver: String!, content: String!): Mail
  }
`;

const typeDefs = [Query, Mutation];

module.exports = typeDefs;
