import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import addons from '@storybook/addons';
import withRedux from 'addon-redux/withRedux';
import { Provider } from 'react-redux';
import store from '../src/state/store';
import { GlobalStyles, Theme } from '../src/assets/styles';

// Configure action parameters
export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// Configure Redux
const withReduxSettings = {
  Provider,
  store,
};
const withReduxDecorator = withRedux(addons)(withReduxSettings);

// Configure default decorators to connect to Redux, Styled Components, React Router, etc.
export const decorators = [
  withReduxDecorator,
  (Story) => (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />

      <Router>
        <Story />
      </Router>
    </ThemeProvider>
  ),
];
