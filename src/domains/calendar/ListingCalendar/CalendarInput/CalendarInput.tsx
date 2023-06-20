import React from 'react';
import CalendarIcon from './../../../../assets/images/calendar-icon.png';
import { CalenderContainer, CalenderContent } from './CalendarInputStyle';
import RightIconInputField from '../../../generals/right_icon_input_field/RightIconInputField';
import CalendarPicker from '../../BNFT-Calendar/CalendarPicker/CalendarPicker';
import { ErrorText } from '../../../generals/error_message/ErrorMessageStyles';

interface CalendarInputProps {
  onChange?: any;
  toggleCalender?: any;
  updateValue?: any;
  showCalender: boolean;
  value: string;
  placeholder: string;
  isDisable?: boolean;
  hasError?: string;
  tileDisabled?: any;
  minDate?: any;
  maxDate?: any;
}

const CalendarInput: React.FC<CalendarInputProps> = ({
  onChange,
  showCalender,
  toggleCalender,
  value,
  placeholder,
  isDisable,
  hasError,
  tileDisabled,
  minDate,
  maxDate,
}) => {
  return (
    <CalenderContainer>
      <RightIconInputField
        placeholder={placeholder}
        value={value}
        isDisable={isDisable}
        icon={CalendarIcon}
        iconClick={() => toggleCalender && toggleCalender()}
      />
      {showCalender && (
        <CalenderContent>
          <CalendarPicker
            onChange={(dates: any) => onChange && onChange(dates)}
            tileDisabled={tileDisabled}
            minDate={minDate}
            maxDate={maxDate}
          />
        </CalenderContent>
      )}
      {hasError && <ErrorText>{hasError}</ErrorText>}
    </CalenderContainer>
  );
};

export default CalendarInput;
