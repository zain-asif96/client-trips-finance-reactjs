import React from 'react';
import LeftIconInputField from '../../../left-icon-input-field/LeftIconInputField';
import HashIcon from '../../../../../assets/images/hash-icon.png';
import { StepTwoWrapper, StepTwoHead } from './Step2Style';
import ActionButtons from '../../../../generals/ActionButtons/ActionButtons';

type VoidFunction = () => void;

interface StepProps {
  updateData?: (name: string, value: string) => void;
  handleSubmit?: VoidFunction;
  nextStep?: VoidFunction;
  previousStep?: VoidFunction;
}
const Step2: React.FC<StepProps> = ({
  handleSubmit,
  previousStep,
}: StepProps) => {
  return (
    <StepTwoWrapper>
      <StepTwoHead>
        Please type the verification code we just sent to your email.
      </StepTwoHead>

      <LeftIconInputField placeholder="Verification" icon={HashIcon} />

      <ActionButtons
        leftBtnText="Back"
        rightBtnText="Submit"
        rightBtnClick={() => {
          if (handleSubmit) handleSubmit();
        }}
        leftBtnClick={() => {
          if (previousStep) previousStep();
        }}
      />
    </StepTwoWrapper>
  );
};

export default Step2;
