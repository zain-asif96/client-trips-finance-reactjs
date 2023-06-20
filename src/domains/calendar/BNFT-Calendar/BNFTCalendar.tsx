import React from 'react';
import './BNFTCalendar.css';
import { Main, Buttons, Title, CalendarContainer } from './BNFTCalendarStyle';
import CalendarPicker from './CalendarPicker/CalendarPicker';
// import { useHistory } from 'react-router-dom';

const BNFTCalendar: React.FC = () => {
  // const history = useHistory();
  // const handleClick = () => {
  // history.push(PATHS.ListingCalendar);
  // };

  return (
    <Main>
      <Title>And what dates do you want this BNFT to be for?</Title>
      <CalendarContainer>
        <CalendarPicker />
      </CalendarContainer>
      <Buttons>
        <button>Back</button>
        <button onClick={undefined /*handleClick*/}>Next</button>
      </Buttons>
    </Main>
  );
};

export default BNFTCalendar;
