import React, { Fragment } from 'react';
import { MainRow } from './CharitiesPageStyle';
import Header from '../../generals/header/Header';
import Charities from './components/charities/Charities';
import PageHeading, {
  HEADING_CONTENT_ALIGNMENT,
  HEADING_SUBTITLE_POSITION,
} from '../../generals/page-heading/PageHeading';

const CreateBooking: React.FC = () => {
  return (
    <Fragment>
      <Header />

      <MainRow>
        <PageHeading
          heading="Charities"
          subtitle="Our helping"
          subtitlePosition={HEADING_SUBTITLE_POSITION.TOP}
          backgroundText="Charities"
          alignment={HEADING_CONTENT_ALIGNMENT.CENTER}
        />
        <Charities />
      </MainRow>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default CreateBooking;
