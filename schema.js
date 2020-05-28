const { gql } = require('apollo-server');

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
    id: Int!
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
    id: Int!
    name: String
    logo: String
    countryCode: String
    extra: ExtrasAvailable
  }
  type Car {
    id: Int!
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
    pickUp: Int
    dropOff: Int
  }
  interface PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    supportedCountries: [String]
  }
  type SupplierAmount {
    supplierAmount: Float
    supplierCurrency: String
  }
  type AllowancePerPeriod {
    total: String
    unit: String
  }
  type AdditionalMileage {
    period: String
    price: SupplierAmount
  }
  type YoungDriverAge {
    minimum: Int
    maximum: Int
  }
  type YoungDriverMinMaX {
    price: YoungDriverMaximumPrice
    age: YoungDriverAge
  }
  type YoungDriverMaximumPrice {
    maximum: SupplierAmount
  }
  type PropertyBodyDamageInvoice {
    isUnlimited: Boolean
    amount: SupplierAmount
  }
  type AdditionalDriverFeesminMax{
    price: YoungDriverMaximumPrice
  }
  type DepositAtPickupMinMaxPrice {
    minimum: SupplierAmount
    maximum: SupplierAmount
  }
  type DepositAtPickupPrice {
    price: DepositAtPickupMinMaxPrice
  }
  type ClassObjectTP {
    hasDeductible: Boolean
    deductibleAmount: SupplierAmount
  }
  type ClassObjectMileage {
    isUnlimited: Boolean
		period: String
		allowancePerPeriod: AllowancePerPeriod
		additionalMileage: AdditionalMileage
  }
  type ClassObjectFuelFees {
    stateAtPickup: String
    stateAtDropOff: String
    remarks: String
  }
  type ClassObjectYoungDriverFees {
    period: String
    pricePerPeriod: SupplierAmount
    minMax: YoungDriverMinMaX
  }
  type ClassObjectAirportTax {
    period: String
  }
  type ClassObjectThirdPartyLiabilityModel {
    propertyDamageInvoice: PropertyBodyDamageInvoice
    bodyDamageInvoice: PropertyBodyDamageInvoice
  }
  type ClassObjectCarRegFees {
    period: String
    pricePerPeriod: SupplierAmount
  }
  type ClassObjectVAT {
    calculationType: String
    percentage: Float
  }
  type ClassObjectAdditionalDriverFees {
    period: String
    pricePerPeriod: SupplierAmount
    minMax: AdditionalDriverFeesminMax
  }
  type ClassObjectPdfContent {
    content: String
  }
  type ClassObjectDepositAtPickup {
    minMax: DepositAtPickupPrice
  }
  type ClassObjectOutOfHourFees {
    calculationType: String
    invoice: SupplierAmount
  }
  type ClassObjectCreditCard {
    creditCard: String
  }
  type ClassObjectDocuments {
    documents: String
  }
  type SupplierAmountWithAuthorisation {
    supplierAmount: Float
    supplierCurrency: String
    requiresAuthorisation: Boolean
  }
  type countriesAllowedWithChargeItem {
    countryCode: String
    pricePerUnit: SupplierAmountWithAuthorisation
  }
  type ClassObjectCrossBorderFees {
    countriesAllowedWithCharge: [countriesAllowedWithChargeItem]
  }
  type TrainStationTaxInvoiceAmount {
    posAmount: Float
    supplierAmount: Float
    posCurrency: String
    supplierCurrency: String
  }
  type TrainStationTaxInvoice {
    invoice: TrainStationTaxInvoiceAmount
  }
  type ClassObjectTrainStationTax {
    calculationType: String
    tax: TrainStationTaxInvoice
  }
  type classObjectTP implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectTP: ClassObjectTP
    supportedCountries: [String]
  }
  type classObjectCDW implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectCDW: ClassObjectTP
    supportedCountries: [String]
  }
  type classObjectMileage implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectMileage: ClassObjectMileage
    supportedCountries: [String]
  }
  type classObjectFuelFees implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectFuelFees: ClassObjectFuelFees
    supportedCountries: [String]
  }
  type classObjectYoungDriverFees implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectYoungDriverFees: ClassObjectYoungDriverFees
    supportedCountries: [String]
  }
  type classObjectAirportTax implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectAirportTax: ClassObjectAirportTax
    supportedCountries: [String]
  }
  type classObjectThirdPartyLiabilityModel implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectThirdPartyLiabilityModel: ClassObjectThirdPartyLiabilityModel
    supportedCountries: [String]
  }
  type classObjectCarRegFees implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectCarRegFees: ClassObjectCarRegFees
    supportedCountries: [String]
  }
  type classObjectVAT implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectVAT: ClassObjectVAT
    supportedCountries: [String]
  }
  type classObjectAdditionalDriverFees implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectAdditionalDriverFees: ClassObjectAdditionalDriverFees
    supportedCountries: [String]
  }
  type classObjectPersonalAccidentInsurance implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectPersonalAccidentInsurance: ClassObjectAdditionalDriverFees
    supportedCountries: [String]
  }
  type classObjectPdfContent implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectPdfContent: ClassObjectPdfContent
    supportedCountries: [String]
  }
  type classObjectOneWayFees implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectOneWayFees: ClassObjectAirportTax
    supportedCountries: [String]
  }
  type classObjectRoadTaxFees implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectRoadTaxFees: ClassObjectCarRegFees
    supportedCountries: [String]
  }
  type classObjectOutOfHourFees implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectOutOfHourFees: ClassObjectOutOfHourFees
    supportedCountries: [String]
  }
  type classObjectWinterChainsForTires implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectWinterChainsForTires: ClassObjectAdditionalDriverFees
    supportedCountries: [String]
  }
  type classObjectDepositAtPickup implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectDepositAtPickup: ClassObjectDepositAtPickup
    supportedCountries: [String]
  }
  type classObjectCleaningFeesFees implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectCleaningFeesFees: ClassObjectCarRegFees
    supportedCountries: [String]
  }
  type classObjectCreditCard implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectCreditCard: ClassObjectCreditCard
    supportedCountries: [String]
  }
  type classObjectOneWayIncludedFees implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectOneWayIncludedFees: ClassObjectAirportTax
    supportedCountries: [String]
  }
  type classObjectAirportTaxFull implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectAirportTaxFull: ClassObjectCarRegFees
    supportedCountries: [String]
  }
  type classObjectEcoTax implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectEcoTax: ClassObjectCarRegFees
    supportedCountries: [String]
  }
  type classObjectDocuments implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectDocuments: ClassObjectDocuments
    supportedCountries: [String]
  }
  type classObjectSecurityDeposit implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectSecurityDeposit: ClassObjectOutOfHourFees
    supportedCountries: [String]
  }
  type classObjectEnvironmentalFees implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectEnvironmentalFees: ClassObjectAirportTax 
    supportedCountries: [String]
  }
  type classObjectCrossBorderFees implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectCrossBorderFees: ClassObjectCrossBorderFees
    supportedCountries: [String]
  }
  type classObjectTrainStationTax implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectTrainStationTax: ClassObjectTrainStationTax
    supportedCountries: [String]
  }
  type classObjectWinterTireFees implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    classObjectWinterTireFees: ClassObjectAdditionalDriverFees
    supportedCountries: [String]
  }
  type classObjectPolicyItem implements PolicyItem {
    id: ID!
    name: String
    code: String
    description: String
    mandatory: Boolean
    inclusive: Boolean
    exclusive: Boolean
    feature: Boolean
    supportedCountries: [String]
  }
  type Bundle {
    id: Int
    description: String
    name: String
    policyUrl: String
    supportedCountries: [String]
  }
  type Extra {
    id: ID!
    code: String
    description: String
  }
  type Meta {
    brand: String
    partner: String
    pointOfSale: String
    timestamp: String
    deeplink_url: String
    pointOfSaleCurrencyCode: String
    tripDuration: Int
    merchantInventory: Boolean
    search_resp_timestamp: String
    search_req_timestamp: String
  }
  type Product {
    productKey: ID!
    availability: String
    carId: Int
    policyIds: [String]
    bundledIds: [Int]
    extrasIds: [String]
    supplierId: Int
    stationId: StationID
    type: String
    rateType: String
    creditCardRequired: Boolean
    price: Price
    priceBreakdown: [PriceBreakdown]
    fees: [Fees]
    supplierCurrency: String
    deeplink: String
    isDeductibleCDWStandardIncluded: Boolean
    isDeductibleCDWPremiumIncluded: Boolean
  }
  type Location {
    id: Int!
    isDropOff: Boolean
    isPickUp: Boolean
    value: String
  }
  type LocationDistance {
    stationId: Int!
    unit: String
    value: Float
  }
  type Query {
    products(pageNumber: Int, perPage: Int): [Product]
    cars: [Car]
    suppliers: [Supplier]
    stations: [Station]
    policyItems: [PolicyItem]
    productGroups: [[String]]
    bundles: [Bundle]
    extras: [Extra]
    meta: Meta
    locations: [Location]
    locationDistance: [LocationDistance]
  }`
  module.exports = typeDefs;