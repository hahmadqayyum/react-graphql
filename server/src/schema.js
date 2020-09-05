const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
      name: String
      age: Int
  }
  type Course {
    subject: String
  }
  type Query {
      user: User
      course: Course
  }
`;

module.exports = typeDefs;
