import React from 'react';
import LeftIconInputField from '../../../left-icon-input-field/LeftIconInputField';
import EmailIcon from '../../../../../assets/images/email-icon.png';
import {
  StepOneWrapper,
  StepOneHead,
  StepOneContentWrapper,
  StepOneDescHead,
  StepOneDesc,
} from './Step1Style';
import ActionButtons from '../../../../generals/ActionButtons/ActionButtons';

type VoidFunction = () => void;

interface StepProps {
  updateData?: (name: string, value: string) => void;
  handleSubmit?: VoidFunction;
  nextStep?: VoidFunction;
  previousStep?: VoidFunction;
  address?: string;
}
const Step1: React.FC<StepProps> = ({ nextStep, previousStep }: StepProps) => {
  // once connected ethers should exist, as well as other info about the user
  return (
    <StepOneWrapper>
      <StepOneHead>Great! You are connected with address!</StepOneHead>
      <StepOneContentWrapper>
        <StepOneDescHead>What’s your email?</StepOneDescHead>
        <StepOneDesc>
          (You can stop here if all you want to do is buy and sell BNFTs, but
          you’ll have to KYC if you want to mint or use BNFTs.)
        </StepOneDesc>
      </StepOneContentWrapper>

      <LeftIconInputField placeholder="Email" icon={EmailIcon} />
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
