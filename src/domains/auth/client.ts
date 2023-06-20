import fetch from 'isomorphic-fetch';
import assert from 'assert';

export type Json =
  | void
  | null
  | undefined
  | boolean
  | number
  | string
  | Json[]
  | { [prop: string]: Json };

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Client = (host = 'http://localhost:9000', channel = 'auth') => {
  assert(host, 'requires api host url');

  const defaultOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors' as RequestMode,
    body: {},
  };

  async function call(action: string, params: Json = {}) {
    const url = [host, channel, action].join('/');
    const options = {
      ...defaultOptions,
      body: JSON.stringify(params),
    };
    // fetch has a really bad api
    const res = await fetch(url, options);
    const text = await res.text();
    assert(res.ok, text);
    try {
      return JSON.parse(text);
    } catch (e) {
      return text;
    }
  }

  return call;
};
type Client = ReturnType<typeof Client>;

export default Client;
