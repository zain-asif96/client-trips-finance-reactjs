import React, { useState } from 'react';
import {
  StepFourWrapper,
  StepFourDesc,
  CheckboxLabelWrapper,
  CheckboxLabel,
} from './Step4Style';
import Checkbox from '../../../checkbox/Checkbox';
import ActionButtons from '../../../../generals/ActionButtons/ActionButtons';

type VoidFunction = () => void;

interface StepProps {
  updateData?: (name: string, value: string) => void;
  handleSubmit?: VoidFunction;
  nextStep?: VoidFunction;
  previousStep?: VoidFunction;
}

const Step4: React.FC<StepProps> = ({ nextStep, previousStep }: StepProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleCheckboxChange = (event: any) => {
    setChecked(event.target.checked);
  };

  return (
    <StepFourWrapper>
      <StepFourDesc>
        Before proceeding, please make sure the dates you selected for your BNFT
        are not also available for booking on Airbnb, VRBO, or any other methods
        that can be used to rent your property. This is to avoid doublebooking.
        If you create a BNFT without blocking off the dates, your BNFT will be
        removed from the market.
      </StepFourDesc>
      <CheckboxLabelWrapper>
        <Checkbox checked={checked} onChange={handleCheckboxChange} />
        <CheckboxLabel>
          I’ve made sure the dates are blocked off on my Airbnb account.
        </CheckboxLabel>
      </CheckboxLabelWrapper>
      <ActionButtons
        leftBtnText="Back"
        rightBtnText="Next"
        rightBtnClick={() => {
          if (nextStep) nextStep();
        }}
        leftBtnClick={() => {
          if (previousStep) previousStep();
        }}
      />
    </StepFourWrapper>
  );
};

export default Step4;
