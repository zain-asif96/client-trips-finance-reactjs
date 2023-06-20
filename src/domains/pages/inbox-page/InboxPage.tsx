import React, { Fragment } from 'react';
import { MainRow } from './InboxPageStyle';
import Header from '../../generals/header/Header';
import Inbox from '../../inbox/Inbox';

const InboxPage: React.FC = () => {
  return (
    <Fragment>
      <Header />

      <MainRow>
        <Inbox />
      </MainRow>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default InboxPage;
