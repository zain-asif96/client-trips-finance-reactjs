import React from 'react';
import {
  Main,
  Title,
  Addresses,
  Buttons,
  Address,
  CalendarContainer,
  Wrapper,
} from './FinalPurchaseStyle';
import CalendarReview from './CalendarReview/CalendarReview';

const FinalPurchase: React.FC = () => {
  const array = ['address1', 'address2', 'address3'];

  return (
    <Main>
      <Title>Let’s review the details!</Title>
      <Wrapper>
        <Addresses>
          {array.map((address, index) => (
            <Address key={index}>{address}</Address>
          ))}
        </Addresses>
        <CalendarContainer>
          <CalendarReview />
        </CalendarContainer>
      </Wrapper>
      <Buttons>
        <button>That’s all correct, I’m ready to buy my BNFT!</button>
      </Buttons>
    </Main>
  );
};

export default FinalPurchase;
