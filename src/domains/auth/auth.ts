import Client from './client';
import Actions from './actions';
import assert from 'assert';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (host?: string) => {
  const client = Client(host);
  const actions = Actions(client);

  async function initToken(token: string | undefined | null) {
    try {
      assert(token, 'requires token');
      await actions.validate({ token });
      return token;
    } catch (err) {
      return actions.token();
    }
  }

  return {
    ...actions,
    initToken,
  };
};
