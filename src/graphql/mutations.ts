import { gql } from '@apollo/client';

export const CREATE_PROPERTY = gql`
  mutation CreateProperty(
    $auth: AuthQueryInput!
    $address: CreateAddressInput!
    $baseListing: NewListingInput!
    $imagePaths: [String]!
    $amenityIds: [Int]!
    $houseRuleIds: [Int]!
  ) {
    propertyCreate(
      input: {
        auth: $auth
        address: $address
        baseListing: $baseListing
        amenityIds: $amenityIds
        imagePaths: $imagePaths
        houseRuleIds: $houseRuleIds
      }
    ) {
      id
    }
  }
`;
export const CREATE_BNFT = gql`
  mutation CreateBNFT(
    $auth: AuthQueryInput!
    $listing: Listing!
    $amenityIds: [Int]!
    $houseRuleIds: [Int]!
  ) {
    propertyCreate(
      input: {
        auth: $auth
        listing: $listing
        amenityIds: $amenityIds
        houseRuleIds: $houseRuleIds
      }
    ) {
      id
    }
  }
`;

export const REQUEST_NFT = gql`
  mutation Request_NFT(
    $propertyId: Int!
    $requesterId: Int!
    $checkIn: Date!
    $checkOut: Date!
    $text: String!
  ) {
    requestProperty(
      propertyId: $propertyId
      requesterId: $requesterId
      checkIn: $checkIn
      checkOut: $checkOut
      text: $text
    ) {
      id
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation SendMessage($id: Int!, $message: String!) {
    messages {
      id
      message
    }
  }
`;

export const REQUEST_ACCEPT = gql`
  mutation RequestAccept($listingId: Int!) {
    requestAccept(input: { listingId: $listingId }) {
      listingId
    }
  }
`;

export const REQUEST_DENY = gql`
  mutation RequestDeny($listingId: Int!) {
    requestDeny(input: { listingId: $listingId }) {
      listingId
    }
  }
`;

// graphQlClient
//   .mutate({
//     mutation: gql`
//       mutation($username: String!, $email: String!, $password: String!) {
//         signUp(username: $username, email: $email, password: $password) {
//           user {
//             id,
//             username,
//             email
//           }
//         }
//       }
//     `,
//     variables: { username, email, password },
//     update: (_cache, result) => {
//       const { data: { signUp: { user: { username, email } } } } = result
//       dispatch(signIn(email, password))
//     },
//   })
//   .catch((error) => {
//     console.log('error', error)
//   })
//   .finally(() => {
//     dispatch(setLoading(false))
//   })
