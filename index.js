const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', {encoding:'utf8', flag:'r'}));
const typeDefs = gql`
  type StationAddress {
    addressLine1: String
    addressLine2: String
    city: String
    state: String
    postalCode: String
    countryCode: String
  }
  type OpeningHours {
    Monday: [OpeningTime]
    Tuesday: [OpeningTime]
    Wednesday: [OpeningTime]
    Thursday: [OpeningTime]
    Friday: [OpeningTime]
    Saturday: [OpeningTime]
    Sunday: [OpeningTime]
  }
  type OpeningTime {
    from: String
    to: String
  }
  type Station {
    id: ID!
    supplierId: Int
    name: String
    address: StationAddress
    phoneNumber: String
    fax: String
    latitude: String
    longitude: String
    timeZone: String
    generalInformation: String
    openingHours: OpeningHours
    isInAirport: String
    isInTerminal: String
    iataCode: String
    status: String
    stationType: String
    stationDetail: String
  }
  type ExtrasAvailable {
    available: Boolean
  }
  type Supplier {
    id: ID!
    name: String
    logo: String
    countryCode: String
    extra: ExtrasAvailable
  }
  type Car {
    id: ID!
    acriss: String
    make: String
    model: String
    doors: Int
    seats: Int
    luggage: Int
    fuelType: String
    image: String
    isAirConditioning: Boolean
    transmission: String
    carGroup: String
  }
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
  type PolicyItem {
    id: ID!
    code: String
    description: String
    classObjectBillingTerms: classObjectBillingTerms
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
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
    isDeductibleCDWStandardIncluded: Boolean
    isDeductibleCDWPremiumIncluded: Boolean
  }
  type Query {
    products(pageNumber: Int, perPage: Int): [Product]
    cars: [Car]
    suppliers: [Supplier]
    stations: [Station]
    policyItems: [PolicyItem]
  }
`;

const resolvers = {
  Query: {
    products: (_, { pageNumber = 1, perPage}) => {
      if(perPage) {
        return data.products.slice((pageNumber - 1) * perPage, pageNumber * perPage)
      } else {
        return data.products;
      }
    },
    cars: () => data.cars,
    suppliers: () => data.suppliers,
    stations: () => data.stations,
    policyItems: () => data.policyItems
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});