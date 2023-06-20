import { gql } from '@apollo/client';

export const HOT_DEALS = gql`
  query GetHotDeals($limit: Int!) {
    hotDeals(input: { limit: $limit }) {
      district
      country
      imagePath
    }
  }
`;

export const HOT_DEALS_LOCALE = gql`
  query GetHotDealLocale($district: String!) {
    listings(input: { district: $district }) {
      id
      name
      price
      checkIn
      checkOut
      property {
        id
        imagePaths
      }
    }
  }
`;

// export const PROPERTY_DETAILS = production
//   ? gql`
//       query GetPropertyDetails($id: String!) {
//         listing {
//           id
//           firstName
//           lastName
//         }
//       }
//     }
//   }
// `;

export const PROPERTY_DETAILS = gql`
  query GetPropertyDetails($id: Int!) {
    listing(input: { id: $id }) {
      id
      name
      price
      checkIn
      checkOut
      maxGuests
      beds
      bathrooms
      bedrooms
      description
      royaltyRate
      amenities {
        id
        name
      }
      houseRules {
        id
        name
      }
      property {
        id
        imagePaths
        address {
          id
          address1
          address2
          address3
          city
          postalCode
          district
          country
        }
        account {
          id
          firstName
          lastName
        }
      }
    }
  }
`;

export const BROSWE_DATA = gql`
  query GetHotDealLocale(
    $district: String
    $checkIn: Date
    $checkOut: Date
    $guests: Int
  ) {
    listings(
      input: {
        district: $district
        checkIn: $checkIn
        checkOut: $checkOut
        guests: $guests
      }
    ) {
      id
      name
      price
      checkIn
      checkOut
      maxGuests
      beds
      bathrooms
      bedrooms
      description
      royaltyRate
      amenities {
        id
        name
      }
      houseRules {
        id
        name
      }
      property {
        id
        imagePaths
        address {
          id
          address1
          address2
          address3
          city
          postalCode
          district
          country
        }
        account {
          id
          firstName
          lastName
        }
      }
    }
  }
`;

export const GET_AMENITIES = gql`
  query GetAmenities {
    amenities {
      id
      name
    }
  }
`;

export const GET_HOUSE_RULES = gql`
  query GetHouseRules {
    houseRules {
      id
      name
    }
  }
`;

export const HELLO_WORLD = gql`
  query HelloWorld {
    helloWorld
  }
`;

export const GET_MESSAGES = gql`
  query GetMessages($id: Int!) {
    messages {
      id
    }
  }
`;

export const MY_LISTINGS = gql`
  query GetMyListing($signed: String, $token: String, $address: String) {
    myListings(input: { signed: $signed, token: $token, address: $address }) {
      id
      isMinted
      property {
        address {
          country
        }
        imagePaths
      }
      name
      checkIn
      checkOut
      price
    }
  }
`;

export const MY_PROPERTIES = gql`
  query GetProperties($signed: String, $token: String, $address: String) {
    myProperties(input: { signed: $signed, token: $token, address: $address }) {
      id
      isVerified
      imagePaths
      address {
        country
      }
      account {
        accountName
      }
      baseListing {
        name
        checkIn
        checkOut
        price
      }
    }
  }
`;

export const MY_BOOKINGS = gql`
  query GetBookings($signed: String, $token: String, $address: String) {
    myBookings(input: { signed: $signed, token: $token, address: $address }) {
      id
      isMinted
      property {
        address {
          country
        }
        imagePaths
      }
      name
      checkIn
      checkOut
      price
    }
  }
`;

export const ALL_REQUESTS = gql`
  query GetRequests($signed: String, $token: String, $address: String) {
    requests(input: { signed: $signed, token: $token, address: $address }) {
      listingId
      name
      checkIn
      checkOut
      status
      requestMessages {
        id
        text
        listingId
        propertyOwnerId
        requesterId
      }
    }
  }
`;

export const BLACK_OUT_DATES = gql`
  query GetBlackoutDates($propertyId: Int!) {
    blackoutDates(input: { propertyId: $propertyId }) {
      dates
    }
  }
`;
