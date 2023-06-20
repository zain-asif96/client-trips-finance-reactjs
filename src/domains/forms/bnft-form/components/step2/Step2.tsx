import React, { useState } from 'react';
import { StepSevenWrapper, StepSevenHead } from './Step2Style';
import RightIconInputField from '../../../../generals/right_icon_input_field/RightIconInputField';
import LeftIconTextArea from '../../../left-icon-textarea/LeftIconTextArea';
import Address from '../../../address/Address';

import ActionButtons from '../../../../generals/ActionButtons/ActionButtons';

type VoidFunction = () => void;

interface StepProps {
  updateData?: (name: string, value: string) => void;
  handleSubmit?: VoidFunction;
  nextStep?: VoidFunction;
  previousStep?: VoidFunction;
}

const Step2: React.FC<StepProps> = ({ nextStep, previousStep }: StepProps) => {
  const [name, setName] = useState<string>('Brandon');

  return (
    <StepSevenWrapper>
      <StepSevenHead>
        What city/state is your property in, and what is its street address?
      </StepSevenHead>
      <RightIconInputField
        placeholder="Name:"
        value={name}
        onChange={(val) => {
          setName(val);
        }}
      />
      <LeftIconTextArea placeholder="Desc:" />

      <Address data="asd" />
      {/* <div onClick={() => updateData('id', 'just an example')}>
        Add your data
      </div> */}
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
    </StepSevenWrapper>
  );
};

export default Step2;
