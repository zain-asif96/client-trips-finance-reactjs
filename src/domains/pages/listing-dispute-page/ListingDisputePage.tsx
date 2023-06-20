import React, { Fragment } from 'react';
import { MainRow } from './ListingDisputePageStyle';
import Header from '../../generals/header/Header';
import AddDispute from '../../forms/add-dispute/AddDispute';

const ListingDisputePage: React.FC = () => {
  return (
    <Fragment>
      <Header />

      <MainRow>
        <AddDispute />
      </MainRow>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default ListingDisputePage;
