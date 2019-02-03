const { gql } = require("apollo-server-express");

const typeDefs = gql`
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

  type Mutation {
    mail(subject: String!, receiver: String!, content: String!): Mail
  }
`;

module.exports = typeDefs;
