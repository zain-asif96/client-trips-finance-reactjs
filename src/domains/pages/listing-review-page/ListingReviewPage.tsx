import React, { Fragment } from 'react';
import { MainRow } from './ListingReviewPageStyle';
import Header from '../../generals/header/Header';
import AddReview from '../../forms/add-review/AddReview';

const ListingReviewPage: React.FC = () => {
  return (
    <Fragment>
      <Header />

      <MainRow>
        <AddReview />
      </MainRow>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default ListingReviewPage;
