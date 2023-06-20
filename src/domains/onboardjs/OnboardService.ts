// import React from 'react';
import assert from 'assert';
import { Wallet, API } from 'bnc-onboard/dist/src/interfaces';
import { Config, NetworkId } from './config';
import Onboard from 'bnc-onboard';
// putting this here to wrap the provider, can change this to web3, or use raw metamask provider
import { ethers } from 'ethers';

type Address = string;

export type Signer = ethers.Signer;

export type ConnectionState = {
  provider: Wallet['provider'] | null;
  networkId: NetworkId | null;
  address: Address | null;
  ethers: Signer | null;
  isConnected: boolean;
};

export const DefaultState: ConnectionState = {
  // onboard provider, wrap to get ethers or web3
  provider: null,
  // users network selection
  networkId: null,
  // users wallet address
  address: null,
  // is wallet connected
  isConnected: false,
  ethers: null,
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (emit: (state: any) => void) => {
  let onboard: API | null = null;
  let state = { ...DefaultState };
  // helper to set state internally and emit out
  function update(obj = {}) {
    state = { ...DefaultState, ...state, ...obj };
    emit(state);
  }
  // gets state
  function get() {
    return state;
  }
  // hard coded subscription callbacks
  const subscriptions = {
    // user changes address
    address: (address: string | null) => {
      update({ address });
    },
    // user changes wallet
    wallet: async (wallet: Wallet) => {
      if (wallet.provider) {
        update({
          provider: wallet.provider,
          ethers: new ethers.providers.Web3Provider(
            wallet.provider,
          ).getSigner(),
        });
      } else {
        update({
          provider: null,
          ethers: null,
        });
      }
    },
    // there is a network callback but it doesnt seem to work. best to listen to provider events.
  };
  async function connect(networkId: NetworkId = 1) {
    assert(!state?.isConnected, 'Already connected');
    if (onboard == null)
      onboard = Onboard({ ...Config(networkId), subscriptions });
    await onboard.walletSelect();
    await onboard.walletCheck();
    const onboardState = await onboard.getState();
    assert(
      onboardState.network == networkId,
      'Invalid network selected, please choose network ' + networkId,
    );
    const props = {
      isConnected: true,
      networkId: onboardState.network,
      provider: onboardState.wallet.provider,
      ethers: new ethers.providers.Web3Provider(
        onboardState.wallet.provider,
      ).getSigner(),
    };
    update(props);
  }
  function disconnect() {
    assert(state?.isConnected, 'Already disconnected');
    onboard?.walletReset();
    update(DefaultState);
  }

  // fill in default state on init and emit event
  update(state);

  // return api interface
  return {
    connect,
    disconnect,
    update,
    get,
  };
};
