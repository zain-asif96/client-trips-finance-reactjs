import React, { Fragment } from 'react';
import Header from '../generals/header/Header';
import { Main } from './HelloWorldStyle';

interface Props {
  children: React.ReactNode;
}

const HelloWorld: React.FC<Props> = () => (
  <Fragment>
    <Main>
      {/* <h1>Hello World!</h1>

      <ContentContainer>{children}</ContentContainer> */}
      <Header />

      {/* <BnftForm /> */}
    </Main>
  </Fragment>
);

export default HelloWorld;
