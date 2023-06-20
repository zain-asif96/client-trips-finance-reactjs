import {
  AMENITIES_SUCCESS,
  Amenity,
  CREATE_PROPERTY_SUCCESS,
  HOT_DEALS_LOCALE_SUCCESS,
  HOT_DEALS_SUCCESS,
  HouseRule,
  HOUSE_RULES_SUCCESS,
  PropertiesActionsType,
  PROPERTY_DETAILS_SUCCESS,
  PropertyProps,
  REQUEST_DENY_SUCCESS,
  REQUEST_ACCEPT_SUCCESS,
  BLACK_OUT_DATES_SUCCESS,
  REQUEST_NFT_SUCCESS,
} from './propertiesActionsType';

export interface Property {
  destination_image: string;
  destination_country?: string;
  destination_name?: string;
  start_date?: string;
  end_date?: string;
  district?: string;
  country?: string;
  id: string;
}

type State = {
  hotDeals: Property[];
  hotDealsLocale: any[];
  propertyDetails: any;
  myProperties: PropertyProps[];
  amenities: Amenity[];
  houseRules: HouseRule[];
  showMessageInput: boolean;
  blackoutDays: any[];
  requestNFtSubmitted: boolean;
};

const initialState: State = {
  hotDeals: [],
  hotDealsLocale: [],
  propertyDetails: null,
  myProperties: [],
  amenities: [],
  houseRules: [],
  showMessageInput: true,
  blackoutDays: [],
  requestNFtSubmitted: false,
};

const propertiesReducer = (
  state: State = initialState,
  action: PropertiesActionsType,
): any => {
  switch (action.type) {
    case HOT_DEALS_SUCCESS: {
      return {
        ...state,
        hotDeals: action.payload,
      };
    }
    case HOT_DEALS_LOCALE_SUCCESS: {
      return {
        ...state,
        hotDealsLocale: action.payload,
      };
    }
    case PROPERTY_DETAILS_SUCCESS: {
      return {
        ...state,
        propertyDetails: action.payload,
      };
    }
    case AMENITIES_SUCCESS: {
      return {
        ...state,
        amenities: action.payload,
      };
    }
    case HOUSE_RULES_SUCCESS: {
      return {
        ...state,
        houseRules: action.payload,
      };
    }
    case CREATE_PROPERTY_SUCCESS: {
      return {
        ...state,
        myProperties: [...state.myProperties, action.payload],
      };
    }
    case REQUEST_DENY_SUCCESS: {
      return {
        ...state,
        showMessageInput: false,
      };
    }
    case REQUEST_ACCEPT_SUCCESS: {
      return {
        ...state,
        showMessageInput: true,
      };
    }
    case BLACK_OUT_DATES_SUCCESS: {
      return {
        ...state,
        blackoutDays: action.payload,
      };
    }
    case REQUEST_NFT_SUCCESS: {
      return {
        ...state,
        requestNFtSubmitted: action.payload,
      };
    }
    default:
      return state;
  }
};

export default propertiesReducer;
