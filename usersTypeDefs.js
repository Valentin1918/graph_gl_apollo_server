const typeDefs = `
  type Query {
    users(id: ID): User
  }
  
  type User {
    id: ID!
    name: String!
    friends(alcoholic: Boolean): [Friend]
  }

  type Friend {
    name: String!
    alcoholic: Boolean
  }
`;

module.exports = typeDefs;