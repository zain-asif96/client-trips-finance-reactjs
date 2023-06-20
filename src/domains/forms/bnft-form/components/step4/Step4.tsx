import React from 'react';
import Select from 'react-select';
import BoardIcon from '../../../../../assets/images/board-icon.png';
import {
  StepEightWrapper,
  StepEightHead,
  MultiSelectWrapper,
} from './Step4Style';
import LeftIconTextArea from '../../../left-icon-textarea/LeftIconTextArea';
import ActionButtons from '../../../../generals/ActionButtons/ActionButtons';

type VoidFunction = () => void;

interface StepProps {
  updateData: (name: string, value: string) => void;
  handleSubmit?: VoidFunction;
  nextStep?: VoidFunction;
  previousStep?: VoidFunction;
}

const Step8: React.FC<StepProps> = ({ previousStep, nextStep }: StepProps) => {
  return (
    <StepEightWrapper>
      <StepEightHead>
        Anything else guests should know about your BNFT? If you have any
        abnormal policies that aren’t covered in standard forms, this is where
        you should disclose that.
      </StepEightHead>
      <LeftIconTextArea placeholder="" icon={BoardIcon} />

      <StepEightHead>Self Check In Policy</StepEightHead>
      <LeftIconTextArea placeholder="" icon={BoardIcon} />

      <StepEightHead>House Rules Policy</StepEightHead>
      {/* <LeftIconTextArea placeholder="" icon={BoardIcon} /> */}
      <MultiSelectWrapper>
        <Select
          options={[
            { value: 'policy1', label: 'Policy 1' },
            { value: 'policy2', label: 'Policy 2' },
            { value: 'policy3', label: 'Policy 3' },
          ]}
          closeMenuOnSelect={false}
          isMulti
          styles={{
            control: (styles) => ({
              ...styles,
              ...{ backgroundColor: '#f4f4f4' },
            }),
          }}
        />
      </MultiSelectWrapper>
      <StepEightHead>KYC Policy</StepEightHead>
      <LeftIconTextArea placeholder="" icon={BoardIcon} />

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
    </StepEightWrapper>
  );
};

export default Step8;
