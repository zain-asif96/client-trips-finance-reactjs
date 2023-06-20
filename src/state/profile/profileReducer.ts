import {
  CREATE_PROPERTY_BNFT_SUCCESS,
  PropertiesActionsType,
} from '../properties/propertiesActionsType';
import { Property } from '../properties/propertiesReducer';
import {
  GET_MY_BOOKINGS_SUCCESS,
  GET_MY_LISTINGS_SUCCESS,
  GET_PROPERTIES_SUCCESS,
  GET_REQUESTS_SUCCESS,
  ListingsActionsType,
} from './profileActionsType';

type State = {
  myListings: Property[];
  myBookings: Property[];
  myProperties: Property[];
  requests: Property[];
};

const initialState: State = {
  myListings: [],
  myBookings: [],
  myProperties: [],
  requests: [],
};

const profileReducer = (
  state: State = initialState,
  action: ListingsActionsType | PropertiesActionsType,
): any => {
  switch (action.type) {
    case GET_MY_LISTINGS_SUCCESS: {
      return {
        ...state,
        myListings: action.payload,
      };
    }
    case CREATE_PROPERTY_BNFT_SUCCESS: {
      return {
        ...state,
        myListings: [...state.myListings, action.payload],
      };
    }
    case GET_PROPERTIES_SUCCESS: {
      return {
        ...state,
        myProperties: action.payload,
      };
    }
    case GET_MY_BOOKINGS_SUCCESS: {
      return {
        ...state,
        myBookings: action.payload,
      };
    }
    case GET_REQUESTS_SUCCESS: {
      return {
        ...state,
        requests: action.payload,
      };
    }
    default:
      return state;
  }
};

export default profileReducer;
