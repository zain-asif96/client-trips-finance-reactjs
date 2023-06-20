import React from 'react';
import { StepEightWrapper } from './Step7Style';
import PriceIcon from '../../../../../assets/images/price-icon.png';

import LeftIconInputField from '../../../left-icon-input-field/LeftIconInputField';

import ActionButtons from '../../../../generals/ActionButtons/ActionButtons';

type VoidFunction = () => void;

interface StepProps {
  updateData: (name: string, value: string) => void;
  handleSubmit?: VoidFunction;
  nextStep?: VoidFunction;
  previousStep?: VoidFunction;
}

const Step8: React.FC<StepProps> = ({ previousStep }: StepProps) => {
  return (
    <StepEightWrapper>
      <LeftIconInputField placeholder="Enter price" icon={PriceIcon} />
      <LeftIconInputField placeholder="Royalty Rate" icon={PriceIcon} />

      <ActionButtons
        leftBtnText="Back"
        rightBtnText="Submit"
        rightBtnClick={() => {
          // if (nextStep) nextStep();
        }}
        leftBtnClick={() => {
          if (previousStep) previousStep();
        }}
      />
    </StepEightWrapper>
  );
};

export default Step8;
