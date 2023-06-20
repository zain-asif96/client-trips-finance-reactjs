import React, { useState } from 'react';
import shapeLeft from '../../assets/shapeLeft.png';
import shapeRight from '../../assets/shapeRight.png';
import Calendar from 'react-calendar';

interface RangeCalendarProps {
  onChange?: any;
  tileDisabled?: any;
  minDate?: any;
  maxDate?: any;
}

const CalendarPicker: React.FC<RangeCalendarProps> = ({
  onChange,
  tileDisabled,
  minDate,
  maxDate,
}) => {
  const [, setDatePicked] = useState<string>('');

  const onChangeDate = (e: Date) => {
    const current_datetime = new Date(e);
    const formatted_date =
      current_datetime.getDate() +
      ',' +
      (current_datetime.getMonth() + 1) +
      ',' +
      current_datetime.getFullYear();
    onChange(e);
    setDatePicked(formatted_date);
  };

  const formatShortWeekday = (locale: string, date: Date) =>
    ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()];

  return (
    <div>
      <Calendar
        onChange={onChangeDate}
        className={['calen']}
        locale="en-GB"
        prev2Label=""
        next2Label=""
        prevLabel={<img src={shapeLeft} alt="" />}
        nextLabel={<img src={shapeRight} alt="" />}
        formatShortWeekday={formatShortWeekday}
        tileDisabled={tileDisabled}
        minDate={minDate}
        maxDate={maxDate}
      />
      {/* <div>{datePicked}</div> */}
    </div>
  );
};

export default CalendarPicker;
