import React from 'react';
import Select from 'react-select';
import {
  StepEightWrapper,
  StepEightHead,
  MultiSelectWrapper,
} from './Step6Style';
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
      <StepEightHead>Property Type</StepEightHead>
      <MultiSelectWrapper>
        <Select
          options={[
            { value: 'privateRoom', label: 'Private Room' },
            { value: 'entirePlace', label: 'Entire Place' },
            { value: 'hotelRoom', label: 'Hotel Room' },
            { value: 'sharedRoom', label: 'Shared Room' },
          ]}
          styles={{
            control: (styles) => ({
              ...styles,
              ...{ backgroundColor: '#f4f4f4' },
            }),
          }}
        />
      </MultiSelectWrapper>

      <StepEightHead>Max Guests</StepEightHead>
      <MultiSelectWrapper>
        <Select
          options={[
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5' },
            { value: '6', label: '6' },
            { value: '7', label: '7' },
            { value: '8', label: '8' },
            { value: '9', label: '9' },
            { value: '10', label: '10' },
          ]}
          styles={{
            control: (styles) => ({
              ...styles,
              ...{ backgroundColor: '#f4f4f4' },
            }),
          }}
        />
      </MultiSelectWrapper>

      <StepEightHead>Beds</StepEightHead>
      <MultiSelectWrapper>
        <Select
          options={[
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5' },
            { value: '6', label: '6' },
            { value: '7', label: '7' },
            { value: '8', label: '8' },
            { value: '9', label: '9' },
            { value: '10', label: '10' },
          ]}
          styles={{
            control: (styles) => ({
              ...styles,
              ...{ backgroundColor: '#f4f4f4' },
            }),
          }}
        />
      </MultiSelectWrapper>

      <StepEightHead>Bedrooms</StepEightHead>
      <MultiSelectWrapper>
        <Select
          options={[
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5' },
            { value: '6', label: '6' },
            { value: '7', label: '7' },
            { value: '8', label: '8' },
            { value: '9', label: '9' },
            { value: '10', label: '10' },
          ]}
          styles={{
            control: (styles) => ({
              ...styles,
              ...{ backgroundColor: '#f4f4f4' },
            }),
          }}
        />
      </MultiSelectWrapper>

      <StepEightHead>Bathrooms</StepEightHead>
      <MultiSelectWrapper>
        <Select
          options={[
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
            { value: '4', label: '4' },
            { value: '5', label: '5' },
            { value: '6', label: '6' },
            { value: '7', label: '7' },
            { value: '8', label: '8' },
            { value: '9', label: '9' },
            { value: '10', label: '10' },
          ]}
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
