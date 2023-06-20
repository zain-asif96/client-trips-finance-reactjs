import React, { Fragment } from 'react';
import { MainRow } from './PropertyListingPageStyle';
import Header from '../../generals/header/Header';
import HotDeals from './components/property-listing/PropertyListing';
// import Footer from '../../generals/footer/Footer';

const PropertyListingPage: React.FC = () => {
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

export default PropertyListingPage;
