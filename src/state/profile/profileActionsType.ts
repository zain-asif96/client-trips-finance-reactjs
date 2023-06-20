import {
  AddressInput,
  Amenity,
  HouseRule,
} from '../properties/propertiesActionsType';

export const GET_MY_LISTINGS = 'GET_MY_LISTINGS';
export const GET_MY_LISTINGS_SUCCESS = 'GET_MY_LISTINGS_SUCCESS';

export const GET_PROPERTIES = 'GET_PROPERTIES';
export const GET_PROPERTIES_SUCCESS = 'GET_PROPERTIES_SUCCESS';

export const GET_MY_BOOKINGS = 'GET_MY_BOOKINGS';
export const GET_MY_BOOKINGS_SUCCESS = 'GET_MY_BOOKINGS_SUCCESS';

export const GET_REQUESTS = 'GET_REQUESTS';
export const GET_REQUESTS_SUCCESS = 'GET_REQUESTS_SUCCESS';

export interface Listing {
  id: number;
  isMinted: boolean;
  name: string;
  price: number;
  ownerNotes: string;
  description: string;
  maxGuests: number;
  type: string;
  beds: number;
  bedrooms: number;
  bathrooms: number;
  royaltyRate: number;
  checkIn: Date;
  checkOut: Date;
  property?: Property;
  propertyOwnerPaymentMethodId: number;
  renterPaymentMethodId: number;
  status: string;
  amenities: Amenity[];
  houseRules: HouseRule[];
  extraPolicy?: string;
  selfCheckPolicy?: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface Property {
  id?: number;
  isVerified: boolean;
  address: AddressInput;
  account: User;
  baseListing?: Listing;
  listings?: Listing[];
  imagePaths: string[];
  updatedAt: Date;
  createdAt: Date;
}

export interface User {
  id: number;
  accountName: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  updatedAt?: Date;
  createdAt?: Date;
}

interface GetMyListingsSuccess {
  type: typeof GET_MY_LISTINGS_SUCCESS;
  payload: any[];
}

interface GetMyPropertiesSuccess {
  type: typeof GET_PROPERTIES_SUCCESS;
  payload: any[];
}

interface GetBookingsSuccess {
  type: typeof GET_MY_BOOKINGS_SUCCESS;
  payload: any[];
}

interface GetRequestsSuccess {
  type: typeof GET_REQUESTS_SUCCESS;
  payload: any[];
}

export type ListingsActionsType =
  | GetMyListingsSuccess
  | GetMyPropertiesSuccess
  | GetBookingsSuccess
  | GetRequestsSuccess;
