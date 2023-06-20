export const SET_LOADING = 'SET_LOADING';
export const SET_ACTION_CIP = 'SET_ACTION_CIP';

interface SetIsLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

interface SetActionCIP {
  type: typeof SET_ACTION_CIP;
  payload: boolean;
}

export type HomeActionTypes = SetIsLoadingAction | SetActionCIP;
