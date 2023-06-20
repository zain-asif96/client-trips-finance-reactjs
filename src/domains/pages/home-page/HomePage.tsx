import React, { Fragment, useEffect } from 'react';
import { MainRow } from './HomePageStyle';
import Header from '../../generals/header/Header';
import HotDeals from './components/hot-deals/HotDeals';
import { useHistory } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();
  useEffect(() => {
    (window as any).appHistory = history;
  }, []);
  return (
    <Fragment>
      <Header />

      <MainRow>
        <HotDeals />
      </MainRow>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Home;
