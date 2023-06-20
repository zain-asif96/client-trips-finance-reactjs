import React, { Fragment } from 'react';
import { MainRow } from './DocsPageStyle';
import Header from '../../generals/header/Header';
import Faqs from '../../faqs/Faqs';

const DocsPage: React.FC = () => {
  return (
    <Fragment>
      <Header />

      <MainRow>
        <Faqs />
      </MainRow>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default DocsPage;
