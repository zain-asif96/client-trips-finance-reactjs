import React, { Fragment, useState } from 'react';
import { MainRow } from './CreateBookingPageStyle';
import Header from '../../generals/header/Header';
import PageHeading, {
  HEADING_CONTENT_ALIGNMENT,
  HEADING_SUBTITLE_POSITION,
} from '../../generals/page-heading/PageHeading';
import MetaMask from '../../meta-mask/MetaMask';
import EmailVerification from '../../forms/email-verification/EmailVerification';
import EthMachine, { State } from '../../ethereum';

const ethMachine = EthMachine(
  process.env.REACT_APP_AUTH_API,
  localStorage.getItem('token'),
  (state: State) => {
    state.token && localStorage.setItem('token', state.token);
    // store.dispatch({ type: 'ethUpdate', payload: state });
  },
);

const CreateBooking: React.FC = () => {
  const [step, setStep] = useState<number>(0);

  return (
    <Fragment>
      <Header />

      <MainRow>
        {step === 0 && (
          <>
            <PageHeading
              heading="Create a Booking"
              subtitle="we're so happy you want to work with us! But before you can create a booking, we're going to need to create your profile first"
              subtitlePosition={HEADING_SUBTITLE_POSITION.BOTTOM}
              backgroundText="Booking"
              alignment={HEADING_CONTENT_ALIGNMENT.CENTER}
            />
            <MetaMask
              onItemClick={(index: number) => {
                if (index === 0) {
                  // connect to onboard for the first time. would probably want to offer disconnect to user as well
                  return ethMachine
                    .start()
                    .then((address) => {
                      console.log(address);
                      setStep(1);
                    })
                    .catch((err) => {
                      // do something with this error. its possible it may error, ie if already connected.
                      console.error(err);
                    });
                }
              }}
            />
          </>
        )}
        {step === 1 && <EmailVerification />}
      </MainRow>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default CreateBooking;
