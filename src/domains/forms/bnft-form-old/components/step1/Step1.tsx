import React from 'react';
import LeftIconInputField from '../../../left-icon-input-field/LeftIconInputField';
import LocationIcon from '../../../../../assets/images/location-red-icon.png';
import { StepOneWrapper, StepOneHead, InputLabel } from './Step1Style';
import ActionButtons from '../../../../generals/ActionButtons/ActionButtons';

type VoidFunction = () => void;

interface StepProps {
  updateData?: (name: string, value: string) => void;
  handleSubmit?: VoidFunction;
  nextStep?: VoidFunction;
  previousStep?: VoidFunction;
}
const Step1: React.FC<StepProps> = ({ nextStep, previousStep }: StepProps) => {
  return (
    <StepOneWrapper>
      <StepOneHead>
        Let’s create your BNFT! Which of your properties do you want to list?
      </StepOneHead>
      <InputLabel>Address 1</InputLabel>
      <LeftIconInputField placeholder="Address" icon={LocationIcon} />
      <InputLabel>Address 2</InputLabel>
      <LeftIconInputField placeholder="Address" icon={LocationIcon} />
      <InputLabel>Address 3</InputLabel>
      <LeftIconInputField placeholder="Address" icon={LocationIcon} />
      <ActionButtons
        rightBtnText="Next"
        rightBtnClick={() => {
          if (nextStep) nextStep();
        }}
        leftBtnClick={() => {
          if (previousStep) previousStep();
        }}
      />
    </StepOneWrapper>
  );
};

export default Step1;
