import React from 'react';
import LeftIconInputField from '../../../left-icon-input-field/LeftIconInputField';
import PriceIcon from '../../../../../assets/images/price-icon.png';
import { StepThreeWrapper, StepThreeHead } from './Step3Style';
import ActionButtons from '../../../../generals/ActionButtons/ActionButtons';

type VoidFunction = () => void;

interface StepProps {
  updateData?: (name: string, value: string) => void;
  handleSubmit?: VoidFunction;
  nextStep?: VoidFunction;
  previousStep?: VoidFunction;
}

const Step3: React.FC<StepProps> = ({ nextStep, previousStep }: StepProps) => {
  return (
    <StepThreeWrapper>
      <StepThreeHead>
        And what price do you want this BNFT sold for? (1 $USDT = Approximately
        $1)
      </StepThreeHead>
      <LeftIconInputField placeholder="Enter price" icon={PriceIcon} />
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
    </StepThreeWrapper>
  );
};

export default Step3;
