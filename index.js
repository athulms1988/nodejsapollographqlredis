const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', {encoding:'utf8', flag:'r'}));
const typeDefs = gql`
  type Amount {
    total: Float
    daily: Float
    payLater: Float
    payNow: Float
    taxesAndFees: Float
  }
  type Price {
    amount: Amount
    supplierAmount: Amount
  }
  type PriceBreakdown {
    amount: Float
    supplierAmount: Float
    quantity: Int
    unit: String
  }
  type Fees {
    amount: Float
    supplierAmount: Float
    description: String
    unit: String
  }
  type classObjectBillingTerms {
    text: String
  }
  type StationID {
    pickUp: String
    dropOff: String
  }
  type PolicyID {
    id: ID!
    code: String
    description: String
    classObjectBillingTerms: classObjectBillingTerms
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    supportedCountries: [String]
  }
  type Bundles {
    id: Int
    description: String
    name: String
    policyUrl: String

  }
  type Product {
    productKey: ID!
    availability: String
    carId: Int
    policyIds: [String]
    bundledIds: [String]
    extrasIds: [String]
    supplierId: Int
    stationId: StationID
    type: String
    rateType: String
    creditCardRequired: String
    price: Price
    priceBreakdown: [PriceBreakdown]
    fees: [Fees]
    supplierCurrency: String
    deeplink: String
  }
  type Query {
    products: [Product]
  }
`;

const resolvers = {
  Query: {
    products: () => data.products
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});