import React from 'react';
import RangeCalendar from './RangeCalendar/RangeCalendar';
import {
  Main,
  Title,
  CalendarContainer,
  Paragraph1,
  Main2,
} from './ListingCalendarStyle';
// import { useHistory } from 'react-router-dom';
// import { PATHS } from '../../../globals';

const ListingCalendar: React.FC = () => {
  /*const history = useHistory();
  const handleClickNext = () => {
    history.push(PATHS.FinalPurchase);
  };
  const handleClickBack = () => {
    history.push(PATHS.BNFT);
  };*/

  return (
    <Main>
      <Main2>
        <Title>Select Check-in date</Title>
        <Paragraph1>Add your travel dates for exact pricing</Paragraph1>
        <CalendarContainer>
          <RangeCalendar />
        </CalendarContainer>
        {/* <BottomComponent>
          <button onClick={handleClickBack}>Back</button>
          <button onClick={handleClickNext}>Next</button>
        </BottomComponent> */}
      </Main2>
    </Main>
  );
};

export default ListingCalendar;
