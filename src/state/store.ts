import { applyMiddleware, StoreEnhancer, createStore, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import { ThunkAction } from 'redux-thunk';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import withReduxEnhancer from 'addon-redux/enhancer';

import rootReducer from './reducers';
import { apolloClient } from '../graphql/apollo-client';
import { composeWithDevTools } from 'redux-devtools-extension';

const createMiddlewareEnhancer = () => {
  return applyMiddleware(thunk.withExtraArgument({ client: apolloClient }));
};

const createEnhancer = (): StoreEnhancer => {
  const enhancers = [];

  enhancers.push(createMiddlewareEnhancer());

  if (process.env.NODE_ENV !== 'production') {
    // add withReduxEnhancer for Storybook to connect to Redux
    enhancers.push(withReduxEnhancer);
  }
  return composeWithDevTools(...enhancers);
};

const store = createStore(rootReducer, createEnhancer());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>;

export default store;
