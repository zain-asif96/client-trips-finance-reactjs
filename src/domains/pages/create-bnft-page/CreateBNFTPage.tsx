import React, { Fragment } from 'react';
import { MainRow } from './CreateBNFTPageStyle';
import Header from '../../generals/header/Header';
import PropertyForm from '../../forms/property-form/PropertyForm';
import { useLocation } from 'react-router-dom';

const CreateBNFTPage: React.FC = () => {
  const location = useLocation();

  return (
    <Fragment>
      <Header />
      <MainRow>
        <PropertyForm isBNFT={true} propertyId={location.state} />
      </MainRow>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default CreateBNFTPage;
