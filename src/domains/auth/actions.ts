import Client from './client';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (client: Client) => {
  async function ping() {
    return client('ping');
  }
  async function token() {
    return client('token');
  }
  async function login(params: {
    token: string;
    signed: string;
    address: string;
  }) {
    return client('login', params);
  }
  async function logout(params: { token: string }) {
    return client('logout', params);
  }
  async function validate(params: { token: string }) {
    return client('validate', params);
  }

  return {
    ping,
    token,
    login,
    logout,
    validate,
  };
};
