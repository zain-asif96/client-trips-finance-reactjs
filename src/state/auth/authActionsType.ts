export interface AuthState {
  signed: string;
  token: string;
  address: string;
}

export const AuthActions = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
};

interface LoginSuccess {
  type: typeof AuthActions.LOGIN_SUCCESS;
  payload: {
    auth: AuthState | null;
  };
}

export type AuthActionsType = LoginSuccess;
