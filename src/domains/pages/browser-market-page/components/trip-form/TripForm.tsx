import React, { useState } from 'react';
import RightIconInputField from '../../../../generals/right_icon_input_field/RightIconInputField';
import {
  TripFormWrapper,
  FormGroupRow,
  FormGroupLeftColumn,
  FormGroupRightColumn,
  SelectDropdown,
} from './TripFormStyle';
import TripButton from './trip-button/TripButton';
import CalendarInput from '../../../../calendar/ListingCalendar/CalendarInput/CalendarInput';
import Select from 'react-select';
import { TripFormProps } from '../../BrowserMarketPage';
import { US_STATES } from '../../../../common/constant';

interface Props {
  submitForm?: (data: TripFormProps) => void;
}

const TripForm: React.FC<Props> = ({ submitForm }: Props) => {
  // const formLabels = {
  //   checkIn: 'Check In',
  //   checkOut: 'Check Out',
  //   guests: 'guests',
  //   country: 'Country',
  // };
  // const [formErrorState, setFormErrorState] = useState<TripFormProps | any>({
  //   checkIn: '',
  //   checkOut: '',
  //   guests: '',
  //   country: '',
  // });
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '',
    district: '',
  });
  const [showCalender, setshowCalender] = useState<{
    checkIn: boolean;
    checkOut: boolean;
  }>({
    checkIn: false,
    checkOut: false,
  });

  const updateValue = (date: Date, type: string) => {
    setFormData({ ...formData, [type]: new Date(date).toDateString() });
    setshowCalender({ ...showCalender, [type]: false });
    // if (formErrorState[type]) {
    //   setFormErrorState({...formErrorState, [type]: ''});
    // }
  };

  const onChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
    // if (formErrorState[key]) {
    //   setFormErrorState({...formErrorState, [key]: ''});
    // }
  };

  return (
    <TripFormWrapper>
      {/* <RightIconInputField placeholder="Location:" icon={LocationIcon} /> */}
      <SelectDropdown>
        <Select
          options={US_STATES}
          styles={{
            control: (styles) => ({
              ...styles,
              ...{
                backgroundColor: '#f4f4f4',
                height: '57px',
                border: 'none',
                outline: 'none',
              },
            }),
          }}
          onChange={(value: any) => onChange('district', value)}
        />
        {/* {formErrorState.country && <ErrorText>{formErrorState.country}</ErrorText>} */}
      </SelectDropdown>
      <FormGroupRow>
        <FormGroupLeftColumn>
          <CalendarInput
            onChange={(date: Date) => updateValue(date, 'checkIn')}
            showCalender={showCalender.checkIn}
            toggleCalender={() =>
              setshowCalender({
                checkOut: false,
                checkIn: !showCalender.checkIn,
              })
            }
            value={formData.checkIn}
            placeholder={'Check in:'}
            minDate={new Date()}
            maxDate={formData.checkOut ? new Date(formData.checkOut) : ''}
            // hasError={formErrorState.checkIn}
          />
        </FormGroupLeftColumn>
        <FormGroupRightColumn>
          <CalendarInput
            onChange={(date: Date) => updateValue(date, 'checkOut')}
            showCalender={showCalender.checkOut}
            toggleCalender={() =>
              setshowCalender({
                checkIn: false,
                checkOut: !showCalender.checkOut,
              })
            }
            value={formData.checkOut}
            placeholder={'Check out:'}
            minDate={formData.checkIn ? new Date(formData.checkIn) : new Date()}
            // hasError={formErrorState.checkOut}
          />
        </FormGroupRightColumn>
      </FormGroupRow>
      <RightIconInputField
        placeholder="Number of guests"
        value={formData.guests}
        onChange={(value) => onChange('guests', value)}
        // hasError={formErrorState.guests}
      />
      {/* checkFormValid(formData,formErrorState,setFormErrorState,formLabels) */}
      <TripButton onClick={() => submitForm && submitForm(formData)} />
    </TripFormWrapper>
  );
};

export default TripForm;
