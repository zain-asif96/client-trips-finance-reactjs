export const GET_HOT_DEALS = 'GET_HOT_DEALS';
export const HOT_DEALS_SUCCESS = 'HOT_DEALS_SUCCESS';
export const HOT_DEALS_LOCALE_SUCCESS = 'HOT_DEALS_LOCALE_SUCCESS';
export const CREATE_PROPERTY_SUCCESS = 'CREATE_PROPERTY_SUCCESS';
export const CREATE_PROPERTY_BNFT_SUCCESS = 'CREATE_PROPERTY_BNFT_SUCCESS';
export const AMENITIES_SUCCESS = 'AMENITIES_SUCCESS';
export const HOUSE_RULES_SUCCESS = 'HOUSE_RULES_SUCCESS';
export const TRIP_DETAILS_SUCCESS = 'TRIP_DETAILS_SUCCESS';
export const PROPERTY_DETAILS_SUCCESS = 'PROPERTY_DETAILS_SUCCESS';
export const REQUEST_ACCEPT_SUCCESS = 'REQUEST_ACCEPT_SUCCESS';
export const REQUEST_DENY_SUCCESS = 'REQUEST_DENY_SUCCESS';
export const REQUEST_ACCEPT_FAILURE = 'REQUEST_ACCEPT_FAILURE';
export const REQUEST_DENY_FAILURE = 'REQUEST_DENY_FAILURE';
export const BLACK_OUT_DATES_SUCCESS = 'BLACK_OUT_DATES_SUCCESS';
export const REQUEST_NFT_SUCCESS = 'REQUEST_NFT_SUCCESS';

export interface PropertyProps {
  address: AddressInput;
  baseListing: NewListingInput;
  imagePaths: string[];
  amenityIds: number[];
  houseRuleIds: number[];
}
export interface CreateBNFTProps {
  listing: NewListingInput;
  amenityIds: number[];
  houseRuleIds: number[];
}
export interface AddressInput {
  address1: string;
  address2: string;
  address3: string;
  city: string;
  postalCode: string;
  district: string;
  country: string;
}

export interface NewListingInput {
  name: string;
  price: number | any;
  ownerNotes: string;
  description: string;
  extraPolicy?: string;
  selfCheckPolicy?: string;
  maxGuests: number | any;
  type: string | any;
  beds: number | any;
  bedrooms: number | any;
  bathrooms: number | any;
  royaltyRate: number | any;
  checkIn: Date | string | any;
  checkOut: Date | string | any;
  status?: string;
  propertyId?: number;
  paymentMethodId?: number;
  propertyOwnerPaymentMethodId?: number;
  renterPaymentMethodId?: number;
}

export interface Amenity {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface HouseRule {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

interface GetHotDealsSuccess {
  type: typeof HOT_DEALS_SUCCESS;
  payload: any[];
}

interface CreatePropertySuccess {
  type: typeof CREATE_PROPERTY_SUCCESS;
  payload: PropertyProps;
}

interface CreatePropertyBNFTSuccess {
  type: typeof CREATE_PROPERTY_BNFT_SUCCESS;
  payload: CreateBNFTProps;
}
interface GetHotDealsLocaleSuccess {
  type: typeof HOT_DEALS_LOCALE_SUCCESS;
  payload: any[];
}

interface GetTripDetailsSuccess {
  type: typeof TRIP_DETAILS_SUCCESS;
  payload: any[];
}

interface GetPropertyDetailsSuccess {
  type: typeof PROPERTY_DETAILS_SUCCESS;
  payload: any[];
}
interface GetAmenitiesSuccess {
  type: typeof AMENITIES_SUCCESS;
  payload: Amenity[];
}

interface GetHouseRulesSuccess {
  type: typeof HOUSE_RULES_SUCCESS;
  payload: HouseRule[];
}
interface AcceptRequestSuccess {
  type: typeof REQUEST_ACCEPT_SUCCESS;
}
interface DennyRequestSuccess {
  type: typeof REQUEST_DENY_SUCCESS;
}
interface AcceptRequestFailure {
  type: typeof REQUEST_ACCEPT_FAILURE;
}
interface DennyRequestFailure {
  type: typeof REQUEST_DENY_FAILURE;
}
interface RequestNFTSuccess {
  type: typeof REQUEST_NFT_SUCCESS;
  payload: boolean;
}
interface BlackoutDatesSuccess {
  type: typeof BLACK_OUT_DATES_SUCCESS;
  payload: any[];
}

export type PropertiesActionsType =
  | GetHotDealsLocaleSuccess
  | GetHotDealsSuccess
  | GetTripDetailsSuccess
  | GetPropertyDetailsSuccess
  | CreatePropertySuccess
  | GetAmenitiesSuccess
  | GetHouseRulesSuccess
  | CreatePropertyBNFTSuccess
  | AcceptRequestSuccess
  | DennyRequestSuccess
  | AcceptRequestFailure
  | DennyRequestFailure
  | BlackoutDatesSuccess
  | RequestNFTSuccess;
