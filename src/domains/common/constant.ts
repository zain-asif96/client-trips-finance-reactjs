import {
  Amenity,
  HouseRule,
} from '../../state/properties/propertiesActionsType';
import { Property } from '../../state/profile/profileActionsType';

export const US_STATES = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
];

export const AMENIIES: Amenity[] = [
  { id: 1, name: 'Amenities 1', createdAt: new Date(), updatedAt: new Date() },
  { id: 2, name: 'Amenities 2', createdAt: new Date(), updatedAt: new Date() },
  { id: 3, name: 'Amenities 3', createdAt: new Date(), updatedAt: new Date() },
  { id: 4, name: 'Amenities 4', createdAt: new Date(), updatedAt: new Date() },
  { id: 5, name: 'Amenities 5', createdAt: new Date(), updatedAt: new Date() },
  { id: 6, name: 'Amenities 6', createdAt: new Date(), updatedAt: new Date() },
  { id: 7, name: 'Amenities 7', createdAt: new Date(), updatedAt: new Date() },
  { id: 8, name: 'Amenities 8', createdAt: new Date(), updatedAt: new Date() },
];

export const HOUSE_RULES: HouseRule[] = [
  { id: 1, name: 'House Rule 1', createdAt: new Date(), updatedAt: new Date() },
  {
    id: 2,
    name: 'House Rule  2',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: 'House Rule  3',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    name: 'House Rule  4',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    name: 'House Rule  5',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 6,
    name: 'House Rule  6',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 7,
    name: 'House Rule  7',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 8,
    name: 'House Rule  8',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const PROPERTY_DETAILS: Property = {
  id: 12312312,
  isVerified: true,
  address: {
    address1: 'testing...',
    address2: 'testing...',
    address3: 'testing...',
    city: 'testing...',
    postalCode: 'testing...',
    district: 'testing...',
    country: 'testing...',
  },
  account: {
    id: 123,
    accountName: 'Test AN',
    firstName: 'Test FN',
    lastName: 'Test FN',
    email: 'Test FN',
    isAdmin: true,
    updatedAt: new Date(),
    createdAt: new Date(),
  },
  baseListing: {
    id: 12312312,
    isMinted: true,
    name: 'My Property',
    price: 10000,
    ownerNotes: 'Test',
    description: 'Test',
    maxGuests: 10,
    type: 'Test',
    beds: 5,
    bedrooms: 5,
    bathrooms: 5,
    royaltyRate: 5,
    checkIn: new Date(),
    checkOut: new Date(),
    status: 'Test',
    amenities: AMENIIES,
    houseRules: HOUSE_RULES,
    extraPolicy: 'Test',
    selfCheckPolicy: 'Test',
    propertyOwnerPaymentMethodId: 123,
    renterPaymentMethodId: 456,
    updatedAt: new Date(),
    createdAt: new Date(),
  },
  imagePaths: ['htpps:www.image.com'],
  updatedAt: new Date(),
  createdAt: new Date(),
};

// const initialFormData = {
//   address: {
//     address1: '',
//     address2: '',
//     address3: '',
//     city: '',
//     postalCode: '',
//     district: '',
//     country: '',
//   },
//   baseListing: {
//     name: '',
//     price: 0,
//     ownerNotes: '',
//     description: '',
//     extraPolicy: '',
//     selfCheckPolicy: '',
//     maxGuests: 0,
//     type: '',
//     beds: 0,
//     bedrooms: 0,
//     bathrooms: 0,
//     royaltyRate: 0,
//     checkIn: new Date(),
//     checkOut: new Date(),
//     status: '',
//     propertyId: 0,
//     paymentMethodId: 0,
//   },
//   imagePaths: [],
//   amenityIds: [],
//   houseRuleIds: [],
// };
