/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ThunkDispatch } from 'redux-thunk';
import { toast } from 'react-toastify';
import {
  BLACK_OUT_DATES,
  BROSWE_DATA,
  GET_AMENITIES,
  GET_HOUSE_RULES,
  HOT_DEALS,
  HOT_DEALS_LOCALE,
  PROPERTY_DETAILS,
} from '../../graphql/queries';
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
  TRIP_DETAILS_SUCCESS,
  CreateBNFTProps,
  CREATE_PROPERTY_BNFT_SUCCESS,
  REQUEST_DENY_SUCCESS,
  REQUEST_DENY_FAILURE,
  REQUEST_ACCEPT_SUCCESS,
  REQUEST_ACCEPT_FAILURE,
  BLACK_OUT_DATES_SUCCESS,
  REQUEST_NFT_SUCCESS,
} from './propertiesActionsType';
import { Property } from './propertiesReducer';
import { apolloClient } from '../../graphql/apollo-client';
import { setActionCIP, setLoading } from '../actions';
import { TripFormProps } from '../../domains/pages/browser-market-page/BrowserMarketPage';
import {
  CREATE_BNFT,
  CREATE_PROPERTY,
  REQUEST_ACCEPT,
  REQUEST_DENY,
  REQUEST_NFT,
} from '../../graphql/mutations';

export const getHotDeals = () => (dispatch: ThunkDispatch<any, any, any>) => {
  dispatch(setLoading(true));
  return apolloClient
    .query({ query: HOT_DEALS, variables: { limit: 10 } })
    .then((res: any) => {
      const { hotDeals } = res.data;
      dispatch(hotDealSuccess(hotDeals));
      dispatch(setLoading(false));
    })
    .catch((err) => {
      console.log(err);
      dispatch(setLoading(false));
    });
};

export const getHotDealsLocale = (district: string) => (
  dispatch: ThunkDispatch<any, any, any>,
) => {
  dispatch(setLoading(true));
  return apolloClient
    .query({ query: HOT_DEALS_LOCALE, variables: { district } })
    .then((res: any) => {
      const { listings } = res.data;
      dispatch(hotDealsLocaleSuccess(listings));
      dispatch(setLoading(false));
    })
    .catch((err) => {
      console.log(err);
      dispatch(setLoading(false));
    });
};

export const getTripDetails = (tripData: TripFormProps) => (
  dispatch: ThunkDispatch<any, any, any>,
) => {
  dispatch(setLoading(true));
  return apolloClient
    .query({ query: BROSWE_DATA, variables: { ...tripData } })
    .then((res: any) => {
      const { listings } = res.data;
      dispatch(hotDealsLocaleSuccess(listings));
      dispatch(setLoading(false));
    })
    .catch((err) => {
      console.log(err);
      dispatch(setLoading(false));
    });
};

export const getPropertyDetails = (propertyId: string) => (
  dispatch: ThunkDispatch<any, any, any>,
) => {
  return apolloClient
    .query({ query: PROPERTY_DETAILS, variables: { id: +propertyId } })
    .then((res: any) => {
      const { listing } = res.data;
      dispatch(getPropertyDetailsSuccess(listing));
    })
    .catch((err) => {
      console.log(err);
      dispatch(setLoading(false));
    });
};

export const createProperty = (propertyData: PropertyProps) => (
  dispatch: ThunkDispatch<any, any, any>,
  getState: any,
) => {
  dispatch(setLoading(true));
  const { authReducer } = getState();
  return apolloClient
    .mutate({
      mutation: CREATE_PROPERTY,
      variables: { ...propertyData, auth: authReducer.auth },
    })
    .then((res: any) => {
      const { newProperty } = res.data;
      toast.success('Property created successfully');
      (window as any).appHistory.push('/profile');
      dispatch(createPropertySuccess(newProperty));
      dispatch(setLoading(false));
    })
    .catch((err) => {
      console.log(err);
      dispatch(setLoading(false));
    });
};

export const createBNFT = (propertyBNFTData: CreateBNFTProps) => (
  dispatch: ThunkDispatch<any, any, any>,
) => {
  dispatch(setLoading(true));
  return apolloClient
    .mutate({ mutation: CREATE_BNFT, variables: { ...propertyBNFTData } })
    .then((res: any) => {
      const { newPropertyBNFT } = res.data;
      dispatch(createPropertyBNFTSuccess(newPropertyBNFT));
      dispatch(setLoading(false));
    })
    .catch((err) => {
      console.log(err);
      dispatch(setLoading(false));
    });
};

export const requestNFT = (requestParams: {
  propertyId: number;
  requesterId: number;
  checkIn: string;
  checkOut: string;
  guests: string;
}) => (dispatch: ThunkDispatch<any, any, any>) => {
  dispatch(setActionCIP(true));
  const params = {
    ...requestParams,
    checkIn: new Date(requestParams.checkIn),
    checkOut: new Date(requestParams.checkOut),
    text: requestParams.guests,
  };

  return apolloClient
    .mutate({ mutation: REQUEST_NFT, variables: { ...params } })
    .then(() => {
      toast.success('Request successfully submitted');
      dispatch(requestNFTSuccess(true));
      dispatch(setActionCIP(false));
    })
    .catch((err) => {
      console.log(err);
      dispatch(requestNFTSuccess(false));
      toast.error('Something went wrong');
      dispatch(setActionCIP(false));
    });
};

export const getBlackOutDays = (id: string) => (
  dispatch: ThunkDispatch<any, any, any>,
) => {
  return apolloClient
    .query({ query: BLACK_OUT_DATES, variables: { propertyId: +id } })
    .then((res) => {
      const { dates } = res.data.blackoutDates;
      const blackoutDates = dates && dates.length ? dates : [];
      dispatch(getBlackOutDaysSuccess(blackoutDates));
      dispatch(setActionCIP(false));
    })
    .catch((err) => {
      console.log(err);
      dispatch(setActionCIP(false));
    });
};

export const getAmenities = () => (dispatch: ThunkDispatch<any, any, any>) => {
  dispatch(setLoading(true));
  return apolloClient
    .query({ query: GET_AMENITIES })
    .then((res: any) => {
      const { amenities } = res.data;
      dispatch(getAmenitiesSuccess(amenities));
      dispatch(setLoading(false));
    })
    .catch((err) => {
      console.log(err);
      dispatch(setLoading(false));
    });
};

export const getHouseRules = () => (dispatch: ThunkDispatch<any, any, any>) => {
  dispatch(setLoading(true));
  return apolloClient
    .query({ query: GET_HOUSE_RULES })
    .then((res: any) => {
      const { houseRules } = res.data;
      dispatch(gethouseRulesSuccess(houseRules));
      dispatch(setLoading(false));
    })
    .catch((err) => {
      console.log(err);
      dispatch(setLoading(false));
    });
};

export const requestAccept = (listingId: number) => (
  dispatch: ThunkDispatch<any, any, any>,
) => {
  dispatch(setActionCIP(true));
  return apolloClient
    .mutate({ mutation: REQUEST_ACCEPT, variables: { listingId } })
    .then(() => {
      dispatch(requestAcceptSuccess());
      dispatch(setActionCIP(false));
    })
    .catch((err) => {
      console.log(err);
      dispatch(requestAcceptFailure());
      dispatch(setActionCIP(false));
    });
};

export const requestDeny = (listingId: number) => (
  dispatch: ThunkDispatch<any, any, any>,
) => {
  dispatch(setActionCIP(true));
  return apolloClient
    .mutate({ mutation: REQUEST_DENY, variables: { listingId } })
    .then(() => {
      dispatch(requestDenySuccess());
      dispatch(setActionCIP(false));
    })
    .catch((err) => {
      console.log(err);
      dispatch(requestDenyFailure());
      dispatch(setActionCIP(false));
    });
};

export const hotDealSuccess = (hotDeal: Property[]): PropertiesActionsType => {
  return {
    type: HOT_DEALS_SUCCESS,
    payload: hotDeal,
  };
};

export const hotDealsLocaleSuccess = (hotDeal: any): PropertiesActionsType => {
  return {
    type: HOT_DEALS_LOCALE_SUCCESS,
    payload: hotDeal,
  };
};

export const createPropertySuccess = (
  newProerty: PropertyProps,
): PropertiesActionsType => {
  return {
    type: CREATE_PROPERTY_SUCCESS,
    payload: newProerty,
  };
};

export const createPropertyBNFTSuccess = (
  newPropertyBNFT: CreateBNFTProps,
): PropertiesActionsType => {
  return {
    type: CREATE_PROPERTY_BNFT_SUCCESS,
    payload: newPropertyBNFT,
  };
};

export const getAmenitiesSuccess = (
  amenities: Amenity[],
): PropertiesActionsType => {
  return {
    type: AMENITIES_SUCCESS,
    payload: amenities,
  };
};

export const gethouseRulesSuccess = (
  houseRules: HouseRule[],
): PropertiesActionsType => {
  return {
    type: HOUSE_RULES_SUCCESS,
    payload: houseRules,
  };
};

export const getTripDetailsSuccess = (hotDeal: any): PropertiesActionsType => {
  return {
    type: TRIP_DETAILS_SUCCESS,
    payload: hotDeal,
  };
};

export const getPropertyDetailsSuccess = (
  propertyDetails: any,
): PropertiesActionsType => {
  return {
    type: PROPERTY_DETAILS_SUCCESS,
    payload: propertyDetails,
  };
};

export const requestAcceptSuccess = (): PropertiesActionsType => {
  return {
    type: REQUEST_ACCEPT_SUCCESS,
  };
};

export const requestAcceptFailure = (): PropertiesActionsType => {
  return {
    type: REQUEST_ACCEPT_FAILURE,
  };
};

export const requestDenySuccess = (): PropertiesActionsType => {
  return {
    type: REQUEST_DENY_SUCCESS,
  };
};

export const requestDenyFailure = (): PropertiesActionsType => {
  return {
    type: REQUEST_DENY_FAILURE,
  };
};

export const getBlackOutDaysSuccess = (dates: any): PropertiesActionsType => {
  return {
    type: BLACK_OUT_DATES_SUCCESS,
    payload: dates,
  };
};

export const requestNFTSuccess = (
  isRequestSubmitted: boolean,
): PropertiesActionsType => {
  return {
    type: REQUEST_NFT_SUCCESS,
    payload: isRequestSubmitted,
  };
};
