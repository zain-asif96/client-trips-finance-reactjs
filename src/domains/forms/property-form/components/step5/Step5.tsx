import React, { useState } from 'react';
import { StepEightWrapper, StepEightHead } from './Step5Style';
import PriceIcon from '../../../../../assets/images/price-icon.png';

import LeftIconInputField from '../../../left-icon-input-field/LeftIconInputField';

import ActionButtons from '../../../../generals/ActionButtons/ActionButtons';
import { checkFormValid, setFieldValues } from '../../../../common/validations';
import { PropertyProps } from '../../../../../state/properties/propertiesActionsType';
import CalendarInput from '../../../../calendar/ListingCalendar/CalendarInput/CalendarInput';

type VoidFunction = () => void;

interface StepProps {
  updateData?: (updatedData: PropertyProps) => void;
  handleSubmit?: VoidFunction;
  nextStep?: VoidFunction;
  previousStep?: VoidFunction;
  formData: PropertyProps;
  step: number;
  isBNFT: boolean;
}

const Step8: React.FC<StepProps> = ({
  previousStep,
  updateData,
  formData,
  handleSubmit,
  step,
  isBNFT,
}: StepProps) => {
  const formLabels = {
    baseListing: {
      price: 'Price',
      royaltyRate: 'Royalty Rate',
    },
  };
  const [formErrorState, setFormErrorState] = useState({
    baseListing: {
      price: '',
      royaltyRate: '',
      checkIn: '',
      checkOut: '',
    },
  });
  const [showCalender, setshowCalender] = useState<{
    checkIn: boolean;
    checkOut: boolean;
  }>({
    checkIn: false,
    checkOut: false,
  });

  const updateValue = (date: Date, type: string) => {
    setFieldValues(
      type,
      new Date(date).toDateString(),
      'baseListing',
      formLabels.baseListing,
      setFormErrorState,
      formData,
      updateData,
    );
    setshowCalender({ ...showCalender, [type]: false });
  };

  return (
    <StepEightWrapper>
      {isBNFT && (
        <>
          <StepEightHead>Check In</StepEightHead>
          <CalendarInput
            onChange={(date: Date) => updateValue(date, 'checkIn')}
            showCalender={showCalender.checkIn}
            toggleCalender={() =>
              setshowCalender({
                checkOut: false,
                checkIn: !showCalender.checkIn,
              })
            }
            value={formData.baseListing.checkIn}
            placeholder={'Check in:'}
            hasError={formErrorState.baseListing.checkIn}
          />
          <StepEightHead>Check Out</StepEightHead>
          <CalendarInput
            onChange={(date: Date) => updateValue(date, 'checkOut')}
            showCalender={showCalender.checkOut}
            toggleCalender={() =>
              setshowCalender({
                checkIn: false,
                checkOut: !showCalender.checkOut,
              })
            }
            value={formData.baseListing.checkOut}
            placeholder={'Check out:'}
            hasError={formErrorState.baseListing.checkOut}
          />
        </>
      )}
      <StepEightHead>Price</StepEightHead>
      <LeftIconInputField
        placeholder="Enter price"
        icon={PriceIcon}
        onChange={(value: string) =>
          setFieldValues(
            'price',
            value,
            'baseListing',
            formLabels.baseListing,
            setFormErrorState,
            formData,
            updateData,
          )
        }
        hasError={formErrorState.baseListing.price}
        value={formData?.baseListing.price}
      />
      <StepEightHead>Royalty Rate</StepEightHead>
      <LeftIconInputField
        placeholder="Enter Royalty Rate"
        icon={PriceIcon}
        onChange={(value: string) =>
          setFieldValues(
            'royaltyRate',
            value,
            'baseListing',
            formLabels.baseListing,
            setFormErrorState,
            formData,
            updateData,
          )
        }
        hasError={formErrorState.baseListing.royaltyRate}
        value={formData?.baseListing.royaltyRate}
      />

      <ActionButtons
        leftBtnText="Back"
        rightBtnText="Submit"
        rightBtnClick={() => {
          if (
            handleSubmit &&
            checkFormValid(
              formData,
              formErrorState,
              setFormErrorState,
              formLabels,
            )
          )
            handleSubmit();
        }}
        leftBtnClick={() => {
          if (previousStep) previousStep();
        }}
        step={step}
      />
    </StepEightWrapper>
  );
};

export default Step8;
