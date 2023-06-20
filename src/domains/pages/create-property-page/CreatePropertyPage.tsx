import React, { Fragment } from 'react';
import { MainRow } from './CreatePropertyPageStyle';
import Header from '../../generals/header/Header';
import PropertyForm from '../../forms/property-form/PropertyForm';
// import Footer from '../../generals/footer/Footer';

const CreatePropertyPage: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <MainRow>
        <PropertyForm isBNFT={false} />
      </MainRow>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default CreatePropertyPage;
