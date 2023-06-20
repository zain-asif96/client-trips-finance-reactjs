/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ThunkDispatch } from 'redux-thunk';
import {
  ALL_REQUESTS,
  MY_BOOKINGS,
  MY_LISTINGS,
  MY_PROPERTIES,
} from '../../graphql/queries';
import {
  GET_PROPERTIES_SUCCESS,
  GET_MY_BOOKINGS_SUCCESS,
  GET_MY_LISTINGS_SUCCESS,
  GET_REQUESTS_SUCCESS,
  ListingsActionsType,
} from './profileActionsType';
import { apolloClient } from '../../graphql/apollo-client';
import { setLoading } from '../actions';
import { Property } from '../properties/propertiesReducer';

export const getMyListings = () => (
  dispatch: ThunkDispatch<any, any, any>,
  getState: any,
) => {
  const { authReducer } = getState();
  dispatch(setLoading(true));
  return apolloClient
    .query({ query: MY_LISTINGS, variables: { ...authReducer.auth } })
    .then((res: any) => {
      const { myListings } = res.data;
      dispatch(myListingsSuccess(myListings));
      dispatch(setLoading(false));
    })
    .catch(() => {
      dispatch(setLoading(false));
    });
};

export const getMyProperties = () => (
  dispatch: ThunkDispatch<any, any, any>,
  getState: any,
) => {
  const { authReducer } = getState();
  dispatch(setLoading(true));
  return apolloClient
    .query({ query: MY_PROPERTIES, variables: { ...authReducer.auth } })
    .then((res: any) => {
      const { myProperties } = res.data;
      dispatch(myPropertiesSuccess(myProperties));
      dispatch(setLoading(false));
    })
    .catch(() => {
      dispatch(setLoading(false));
    });
};

export const getMyBookings = () => (
  dispatch: ThunkDispatch<any, any, any>,
  getState: any,
) => {
  const { authReducer } = getState();
  dispatch(setLoading(true));
  return apolloClient
    .query({ query: MY_BOOKINGS, variables: { ...authReducer.auth } })
    .then((res: any) => {
      const { myBookings } = res.data;
      dispatch(myBookingsSuccess(myBookings));
      dispatch(setLoading(false));
    })
    .catch(() => {
      dispatch(setLoading(false));
    });
};

export const getRequests = () => (
  dispatch: ThunkDispatch<any, any, any>,
  getState: any,
) => {
  const { authReducer } = getState();
  dispatch(setLoading(true));
  return apolloClient
    .query({ query: ALL_REQUESTS, variables: { ...authReducer.auth } })
    .then((res: any) => {
      const { requests } = res.data;
      dispatch(requestsSuccess(requests));
      dispatch(setLoading(false));
    })
    .catch(() => {
      dispatch(setLoading(false));
    });
};

export const myListingsSuccess = (
  myListings: Property[],
): ListingsActionsType => {
  return {
    type: GET_MY_LISTINGS_SUCCESS,
    payload: myListings,
  };
};

export const myPropertiesSuccess = (
  myProperties: Property[],
): ListingsActionsType => {
  return {
    type: GET_PROPERTIES_SUCCESS,
    payload: myProperties,
  };
};

export const myBookingsSuccess = (
  myBookings: Property[],
): ListingsActionsType => {
  return {
    type: GET_MY_BOOKINGS_SUCCESS,
    payload: myBookings,
  };
};

export const requestsSuccess = (requests: Property[]): ListingsActionsType => {
  return {
    type: GET_REQUESTS_SUCCESS,
    payload: requests,
  };
};
