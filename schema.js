const { gql } = require('apollo-server-express');
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
type Reviews {
  count: Int
  positive: Int
  negative: Int
  recommend_percent: Float
  sort_recommend_percent: Float
}
type PickupWaitTime {
  Minutes61: Int
  Minutes010: Int
  Minutes1120: Int
  Minutes2130: Int
  Minutes3140: Int
  Minutes4150: Int
  Minutes5160: Int
  average_time: Int
}
type Ratings {
  Vehicle_cleanliness_and_condition: Float
  Time_taken_to_drop_off: Float
  Staff: Float
  Overall_Value: Float
  ratingSortScore: Float
  overAllRating: Int
  overAllRating_Categories: [Int]
  Pickup_wait_time: PickupWaitTime
  PickupTime: String
  PickupTime_Categories: [String]
}
type StationReviews {
  id: Int
  rating: Int
  reviews: Reviews
  recommend_category: String
  recommend_categories: [String]
  ratings: Ratings
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
  stationReviews: StationReviews
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
type ClassObjectBillingTerms {
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
type AllowedWithCharge {
  countryCode: String
  pricePerUnit: SupplierAmountWithAuthorisation
}
type ClassObjectBaseModel {
  period: String
  pricePerPeriod: SupplierAmount
  pickupDate: String
  minMax: YoungDriverMinMaX
  invoice: SupplierAmount
  dropOffDate: String
}
type ClassObjectTP {
  hasDeductible: Boolean
  deductibleAmount: SupplierAmount
}
type ClassObjectInsurance {
  hasDeductible: Boolean
  deductibleAmount: SupplierAmount
  type: String
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
type ClassObjectFuel {
  stateAtPickup: String
  stateAtDropOff: String
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
type ClassObjectInvoice {
  calculationType: String
  percentage: Float
  invoice: SupplierAmount
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
type ClassObjectDrivingLicense {
  internationalDrivingLicense: String
}
type ClassObjectUrl {
  policyUrl: String
}
type ClassObjectCreditCardFees {
  price: SupplierAmount
}
type StateList {
  posFxRate: Float
  supplierTotalTaxAndFees: Float
  posTotalAmount: Float
  finalTotalPrice: Float
  referenceFxRate: Float
  posTotalTaxesAndFees: Float
  posTotalPayLater: Float
  supplierTotalPayLater: Float
  payNowInEur: Float
  posTotalPayNow: Float
}
type ClassObjectRegionalBorderFees {
  statesAllowedWithCharge: AllowedWithCharge
  statesAllowedForFree: [StateList]
  statesNotAllowed: [StateList]
}
type ClassObjectMaximumKilometers {
  unit: String
  maxAllowance: Float
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
type classObjectBillingTerms implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectBillingTerms: ClassObjectBillingTerms
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
type classObjectSeniorDriverFees implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectSeniorDriverFees: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectInsuranceAtPickupFees implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectInsuranceAtPickupFees: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectHarborTax implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectHarborTax: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectShuttleServiceFees implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectShuttleServiceFees: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectServiceCharge implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectServiceCharge: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectGlobalPositioningSystemFees implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectGlobalPositioningSystemFees: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectFacilityCharges implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectFacilityCharges: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectSafetyEquipmentFees implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectSafetyEquipmentFees: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectFixedParkingCharge implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectFixedParkingCharge: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectDrivingLicense implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectDrivingLicense: ClassObjectDrivingLicense
  supportedCountries: [String]
}
type classObjectFuelSurcharge implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectFuelSurcharge: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectUrl implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectUrl: ClassObjectUrl
  supportedCountries: [String]
}
type classObjectCorsicaSurcharge implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectCorsicaSurcharge: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectRegionalTax implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectRegionalTax: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectCongestionTax implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectCongestionTax: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectCreditCardFees implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectCreditCardFees: ClassObjectCreditCardFees
  supportedCountries: [String]
}
type classObjectTireManagementFees implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectTireManagementFees: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectFirstAdditionalDriverFees implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectFirstAdditionalDriverFees: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectNoShowFees implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectNoShowFees: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectThirdPartyLiability implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectThirdPartyLiability: ClassObjectThirdPartyLiabilityModel
  supportedCountries: [String]
}
type classObjectRecoveryFees implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectRecoveryFees: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectDamageFees implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectDamageFees: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectWinterFees implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectWinterFees: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectAdditionalDriverHusbandOrWife implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectAdditionalDriverHusbandOrWife: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectAirportTaxPercentage implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectAirportTaxPercentage: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectCancellationTerms implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectCancellationTerms: ClassObjectBillingTerms
  supportedCountries: [String]
}
type classObjectInsurance implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectInsurance: ClassObjectInsurance
  supportedCountries: [String]
}
type classObjectFuel implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectFuel: ClassObjectFuel
  supportedCountries: [String]
}
type classObjectDeliveryOrCollectionAtHotelFees implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectDeliveryOrCollectionAtHotelFees: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectTollTax implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectTollTax: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectHtmlContent implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectHtmlContent: ClassObjectPdfContent
  supportedCountries: [String]
}
type classObjectAmericanExpressSurcharge implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectAmericanExpressSurcharge: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectInvoice implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectInvoice: ClassObjectInvoice
  supportedCountries: [String]
}
type classObjectSecondAdditionalDriverFees implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectSecondAdditionalDriverFees: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectInternationalDrivingLicense implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectInternationalDrivingLicense: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectRegionalBorderFees implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectRegionalBorderFees: ClassObjectRegionalBorderFees
  supportedCountries: [String]
}
type classObjectDvlaCheckingFees implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectDvlaCheckingFees: ClassObjectBaseModel
  supportedCountries: [String]
}
type classObjectMaximumKilometers implements PolicyItem {
  id: ID!
  name: String
  code: String
  description: String
  mandatory: Boolean
  inclusive: Boolean
  exclusive: Boolean
  feature: Boolean
  classObjectMaximumKilometers: ClassObjectMaximumKilometers
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
  totalCount: Int
  currentCount: Int
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
input searchInput {
  pickupLocation: String
  dropoffLocation: String
  dropoffDateTime: String
  language: String
  pickupDateTime: String
  accountId: Int!
  sessionId: String
  visitId: String
  visitorId: String
  channelCategory: String
  externalRequestId: String
  deviceType: String
  brand: String
  pageNumber: Int
  perPage: Int
  pos:String
  filter:String
 }
 type Offer{
  products: [Product]
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
 }
type Query {
  offers(query: searchInput):Offer!
}
`;
module.exports = typeDefs;