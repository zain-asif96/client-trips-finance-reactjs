import React from 'react';
import shapeLeft from '../../assets/shapeLeft.png';
import shapeRight from '../../assets/shapeRight.png';
import Calendar from 'react-calendar';

interface RangeCalendarProps {
  onChange?: any;
}

const RangeCalendar: React.FC<RangeCalendarProps> = ({ onChange }) => {
  const onChangeRange = (e: Date) => {
    console.log(e);
    if (onChange) {
      onChange(e);
    }
  };

  const formatShortWeekday = (locale: string, date: Date) =>
    ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()];

  return (
    <Calendar
      onChange={onChangeRange}
      className={['calen']}
      locale="en-GB"
      prev2Label=""
      next2Label=""
      prevLabel={<img src={shapeLeft} alt="" />}
      nextLabel={<img src={shapeRight} alt="" />}
      formatShortWeekday={formatShortWeekday}
      selectRange={true}
    />
  );
};

export default RangeCalendar;
