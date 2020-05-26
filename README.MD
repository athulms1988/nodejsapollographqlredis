# Install Dependencies

`npm install`

# Run 

`npm start`

The app will start running on http://localhost:4000

# Supported GraphQL Schema

`{
  products {
      productKey
      availability
      carId
      policyIds
      bundledIds
      extrasIds
      supplierId
      stationId {
        pickUp
        dropOff
      }
      type
      rateType
      creditCardRequired
      price {
        amount {
            total
            daily
            payLater
            payNow
            taxesAndFees
        }
        supplierAmount {
            total
            daily
            payLater
            payNow
            taxesAndFees
        }
      }
      priceBreakdown {
        amount
        supplierAmount
        quantity
        unit
      }
      fees {
        amount
        supplierAmount
        description
        unit
      }
      supplierCurrency
      deeplink
  }
  cars {
    id
    acriss
    make
    model
    doors
    seats
    luggage
    fuelType
    image
    isAirConditioning
    transmission
    carGroup
  }
  suppliers {
    id
    name
    logo
    countryCode
    extra {
        available
    }
  }
  stations {
    id
    supplierId
    name
    address {
        addressLine1
        addressLine2
        city
        state
        postalCode
    }
    phoneNumber
    fax
    latitude
    longitude
    timeZone
    generalInformation
    openingHours {
        Monday {
            from
            to
        }
        Tuesday {
            from
            to
        }
        Wednesday {
            from
            to
        }
        Thursday {
            from
            to
        }
        Friday {
            from
            to
        }
        Saturday {
            from
            to
        }
        Sunday {
            from
            to
        }
    }
    isInAirport
    isInTerminal
    iataCode
    status
    stationType
  }
  policyItems {
    id
    code
    description
    classObjectBillingTerms {
        text
    }
    mandatory
    inclusive
    exclusive
    supportedCountries
  }
}`

# Postman Request & Response

![Postman Request](request.png)

![Postman Request](response.png)