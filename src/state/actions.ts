import { HomeActionTypes, SET_ACTION_CIP, SET_LOADING } from './actionsType';

export const setLoading = (isLoading: boolean): HomeActionTypes => {
  return {
    type: SET_LOADING,
    payload: isLoading,
  };
};

export const setActionCIP = (isLoading: boolean): HomeActionTypes => {
  return {
    type: SET_ACTION_CIP,
    payload: isLoading,
  };
};
