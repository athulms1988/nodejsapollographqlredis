const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', {encoding:'utf8', flag:'r'}));
const typeDefs = gql`
  type Product {
    productKey: ID!
    availability: String
    carId: Int
  }
  type Query {
    products: [Product]
  }
`;

const resolvers = {
  Query: {
    products: () => data.products,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});