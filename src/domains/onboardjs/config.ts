import { Initialization } from 'bnc-onboard/dist/src/interfaces';
export type NetworkId = 1 | 42 | 3 | 4;

export function Config(networkId: NetworkId): Initialization {
  return {
    dappId: process.env.REACT_APP_ONBOARD_KEY || '',
    hideBranding: true,
    networkId, // Default to main net. If on a different network will change with the subscription.
    walletSelect: {
      wallets: [{ walletName: 'metamask', preferred: true }],
    },
    walletCheck: [
      { checkName: 'connect' },
      { checkName: 'accounts' },
      { checkName: 'network' },
      { checkName: 'balance', minimumBalance: '0' },
    ],
    // To prevent providers from requesting block numbers every 4 seconds (see https://github.com/WalletConnect/walletconnect-monorepo/issues/357)
    blockPollingInterval: 1000 * 60 * 60,
  };
}
