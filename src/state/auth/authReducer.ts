import { AuthActionsType, AuthActions, AuthState } from './authActionsType';

export interface IUser {
  id: number;
  name: string;
}

type State = {
  isLoggedIn: false;
  user: IUser;
  auth: AuthState | null;
};

const initialState: State = {
  isLoggedIn: false,
  user: { id: 1, name: 'john' },
  auth: null,
};

const authReducer = (
  state: State = initialState,
  action: AuthActionsType,
): any => {
  switch (action.type) {
    case AuthActions.LOGIN_SUCCESS: {
      state.auth = action.payload.auth;
      return state;
    }
    default:
      return state;
  }
};

export default authReducer;
