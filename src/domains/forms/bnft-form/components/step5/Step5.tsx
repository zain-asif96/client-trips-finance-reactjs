import React from 'react';
import Select from 'react-select';
import {
  StepEightWrapper,
  StepEightHead,
  MultiSelectWrapper,
} from './Step5Style';
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
      <StepEightHead>Amenities</StepEightHead>
      <MultiSelectWrapper>
        <Select
          options={[
            { value: 'amenities1', label: 'Amenities 1' },
            { value: 'amenities2', label: 'Amenities 2' },
            { value: 'amenities3', label: 'Amenities 3' },
            { value: 'amenities4', label: 'Amenities 4' },
            { value: 'amenities5', label: 'Amenities 5' },
            { value: 'amenities6', label: 'Amenities 6' },
            { value: 'amenities7', label: 'Amenities 7' },
            { value: 'amenities8', label: 'Amenities 8' },
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
