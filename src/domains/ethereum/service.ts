import assert from 'assert';
import OnboardService, { Signer } from '../onboardjs/OnboardService';
import store from '../../../src/state/store';
import Auth from '../auth';
import { AuthActions } from '../../../src/state/auth/authActionsType';

export type State = {
  status?: string;
  attempt: number;
  ethers?: Signer;
  token?: string;
  address?: string;
  isLoggedIn?: boolean;
  isConnected?: boolean;
  error?: Error;
  res?: (address: string) => void;
  rej?: (error: Error) => void;
  onboard?: ReturnType<typeof OnboardService>;
  auth?: ReturnType<typeof Auth>;
};

// make sure login goes smoothly. instanciate this once and pass in state as needed
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (
  authApi: string | undefined,
  token: string | null,
  emit?: (state: State) => void,
) => {
  let state: State = { status: 'standby', attempt: 0 };

  // this is very easy to be an infinite loop, since step calls setState recursively.
  // must make sure state machine terminates.
  const setState = (update = {}) => {
    state = { ...state, ...update };
    emit && emit(state);
    step();
  };

  const auth = Auth(authApi);
  const onboard = OnboardService(setState);

  setState({ auth, onboard });

  auth
    .initToken(token)
    .then((token) => setState({ token }))
    .catch((error) => setState({ error }));

  // state machine step function. Re-calls itself recursively on state changes
  function step() {
    if (state.error) {
      state.rej && state.rej(state.error);
      return setState({
        status: 'standby',
        error: undefined,
        rej: undefined,
        res: undefined,
      });
    }
    switch (state.status) {
      case 'standby': {
        // do nothing until something moves us to login state
        return state;
      }
      case 'login': {
        if (!state.isConnected) return setState({ status: 'connect' });
        if (!state.ethers) return state;
        if (!state.token) return state;
        if (!state.address) return state;
        const attempt = ++state.attempt;
        login(state as LoginParams)
          .then(() => setState({ isLoggedIn: true }))
          // goes to error state
          .catch((error) => setState({ error }));
        return setState({ status: 'loginWait', attempt });
      }
      case 'connect': {
        onboard
          .connect()
          .then(() => setState({ status: 'login' }))
          .catch((error) => setState({ error }));
        return setState({ status: 'connectWait' });
      }
      case 'connectWait': {
        // do nothing here, this is so we dont try to connect again while waiting
        break;
      }
      case 'loginWait': {
        if (state.isLoggedIn) {
          state.res && state.address && state.res(state.address);
          return setState({
            status: 'standby',
            isLoggedIn: false,
            res: undefined,
            rej: undefined,
          });
        }
      }
    }
  }
  type LoginParams = { ethers: Signer; token: string; address: string };
  async function login(params: LoginParams) {
    const { ethers, token, address } = params;
    const signed = await ethers.signMessage(token);
    await auth.login({ signed, token, address });
    console.log({ signed, token, address });
    store.dispatch({
      type: AuthActions.LOGIN_SUCCESS,
      payload: { auth: { signed, token, address } },
    });
  }
  async function start() {
    assert(state.status === 'standby', 'Unable to login right now');
    return new Promise((res, rej) => {
      setState({ status: 'login', res, rej });
    });
  }

  return { start };
};
