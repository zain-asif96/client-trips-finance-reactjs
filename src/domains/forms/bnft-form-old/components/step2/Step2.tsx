import React from 'react';
import CalendarPicker from '../../../../calendar/BNFT-Calendar/CalendarPicker/CalendarPicker';
import ActionButtons from '../../../../generals/ActionButtons/ActionButtons';
import { StepTwoWrapper, StepTwoHead, CalendarContainer } from './Step2Style';

// THERE WILL BE 6 STEPS FOR THIS ONE.

type VoidFunction = () => void;

// Note: not every Step will use all these functions.
// This is JUST an example.
interface StepProps {
  updateData?: (name: string, value: string) => void;
  handleSubmit?: VoidFunction;
  nextStep?: VoidFunction;
  previousStep?: VoidFunction;
}

// Don't bother trying to abstract these form steps.
// Simply make a new component for each page and pass them in as steps to keep it nice and simple.
const Step2: React.FC<StepProps> = ({ nextStep, previousStep }: StepProps) => {
  return (
    <StepTwoWrapper>
      <StepTwoHead>And what dates do you want this BNFT to be for?</StepTwoHead>
      <CalendarContainer>
        <CalendarPicker />
      </CalendarContainer>
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
    </StepTwoWrapper>
  );
};

export default Step2;
