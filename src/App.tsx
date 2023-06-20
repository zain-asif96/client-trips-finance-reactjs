import React, { Suspense } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, Theme } from './assets/styles';
import { Page } from './AppStyles';
import Routes from './Routes';
import Test from './Test';
import './i18n';

const App: React.FC = () => {
  return (
    <Suspense fallback="loading">
      <ThemeProvider theme={Theme}>
        <Test />
        <GlobalStyles />
        <Page>
          <Router>
            <Switch>
              <Routes />
            </Switch>
          </Router>
        </Page>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
