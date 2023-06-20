import React from 'react';
import shapeLeft from '../../calendar/assets/shapeLeft.png';
import shapeRight from '../../calendar/assets/shapeRight.png';
import Calendar from 'react-calendar';

const CalendarReview: React.FC = () => {
  const formatShortWeekday = (locale: string, date: Date) =>
    ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()];

  return (
    <Calendar
      className={['calen']}
      locale="en-GB"
      prev2Label=""
      next2Label=""
      prevLabel={<img src={shapeLeft} alt="" />}
      nextLabel={<img src={shapeRight} alt="" />}
      formatShortWeekday={formatShortWeekday}
      selectRange
    />
  );
};

export default CalendarReview;
