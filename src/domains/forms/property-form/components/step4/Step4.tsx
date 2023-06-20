import React, { useState } from 'react';
import Select from 'react-select';
import {
  StepEightWrapper,
  StepEightHead,
  MultiSelectWrapper,
} from './Step4Style';
import ActionButtons from '../../../../generals/ActionButtons/ActionButtons';
import { checkFormValid, setFieldValues } from '../../../../common/validations';
import { ErrorText } from '../../../../generals/error_message/ErrorMessageStyles';
import { PropertyProps } from '../../../../../state/properties/propertiesActionsType';

type VoidFunction = () => void;

interface StepProps {
  updateData?: (updatedData: PropertyProps) => void;
  handleSubmit?: VoidFunction;
  nextStep?: VoidFunction;
  previousStep?: VoidFunction;
  formData: PropertyProps;
  step: number;
}

const Step8: React.FC<StepProps> = ({
  previousStep,
  nextStep,
  updateData,
  formData,
  step,
}: StepProps) => {
  const formLabels = {
    baseListing: {
      type: 'Property Type',
      maxGuests: 'Max Guests',
      beds: 'Beds',
      bedrooms: 'Bedrooms',
      bathrooms: 'Bathrooms',
    },
  };
  const [formErrorState, setFormErrorState] = useState({
    baseListing: {
      type: '',
      maxGuests: '',
      beds: '',
      bedrooms: '',
      bathrooms: '',
    },
  });

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
          value={formData?.baseListing.type}
          onChange={(selectedOption) =>
            setFieldValues(
              'type',
              selectedOption,
              'baseListing',
              formLabels.baseListing,
              setFormErrorState,
              formData,
              updateData,
            )
          }
        />
        {formErrorState.baseListing.type && (
          <ErrorText>{formErrorState.baseListing.type}</ErrorText>
        )}
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
          onChange={(selectedOption) =>
            setFieldValues(
              'maxGuests',
              selectedOption,
              'baseListing',
              formLabels.baseListing,
              setFormErrorState,
              formData,
              updateData,
            )
          }
          value={formData?.baseListing.maxGuests}
        />
        {formErrorState.baseListing.maxGuests && (
          <ErrorText>{formErrorState.baseListing.maxGuests}</ErrorText>
        )}
      </MultiSelectWrapper>

      <StepEightHead>Beds</StepEightHead>
      <MultiSelectWrapper>
        <Select
          options={[
            { value: 1, label: '1' },
            { value: 2, label: '2' },
            { value: 3, label: '3' },
            { value: 4, label: '4' },
            { value: 5, label: '5' },
            { value: 6, label: '6' },
            { value: 7, label: '7' },
            { value: 8, label: '8' },
            { value: 9, label: '9' },
            { value: 10, label: '10' },
          ]}
          styles={{
            control: (styles) => ({
              ...styles,
              ...{ backgroundColor: '#f4f4f4' },
            }),
          }}
          value={formData?.baseListing.beds}
          onChange={(selectedOption) =>
            setFieldValues(
              'beds',
              selectedOption,
              'baseListing',
              formLabels.baseListing,
              setFormErrorState,
              formData,
              updateData,
            )
          }
        />
        {formErrorState.baseListing.beds && (
          <ErrorText>{formErrorState.baseListing.beds}</ErrorText>
        )}
      </MultiSelectWrapper>

      <StepEightHead>Bedrooms</StepEightHead>
      <MultiSelectWrapper>
        <Select
          options={[
            { value: 1, label: '1' },
            { value: 2, label: '2' },
            { value: 3, label: '3' },
            { value: 4, label: '4' },
            { value: 5, label: '5' },
            { value: 6, label: '6' },
            { value: 7, label: '7' },
            { value: 8, label: '8' },
            { value: 9, label: '9' },
            { value: 10, label: '10' },
          ]}
          styles={{
            control: (styles) => ({
              ...styles,
              ...{ backgroundColor: '#f4f4f4' },
            }),
          }}
          value={formData?.baseListing.bedrooms}
          onChange={(selectedOption) =>
            setFieldValues(
              'bedrooms',
              selectedOption,
              'baseListing',
              formLabels.baseListing,
              setFormErrorState,
              formData,
              updateData,
            )
          }
        />
        {formErrorState.baseListing.bedrooms && (
          <ErrorText>{formErrorState.baseListing.bedrooms}</ErrorText>
        )}
      </MultiSelectWrapper>

      <StepEightHead>Bathrooms</StepEightHead>
      <MultiSelectWrapper>
        <Select
          options={[
            { value: 1, label: '1' },
            { value: 2, label: '2' },
            { value: 3, label: '3' },
            { value: 4, label: '4' },
            { value: 5, label: '5' },
            { value: 6, label: '6' },
            { value: 7, label: '7' },
            { value: 8, label: '8' },
            { value: 9, label: '9' },
            { value: 10, label: '10' },
          ]}
          styles={{
            control: (styles) => ({
              ...styles,
              ...{ backgroundColor: '#f4f4f4' },
            }),
          }}
          value={formData?.baseListing.bathrooms}
          onChange={(selectedOption) =>
            setFieldValues(
              'bathrooms',
              selectedOption,
              'baseListing',
              formLabels.baseListing,
              setFormErrorState,
              formData,
              updateData,
            )
          }
        />
        {formErrorState.baseListing.bathrooms && (
          <ErrorText>{formErrorState.baseListing.bathrooms}</ErrorText>
        )}
      </MultiSelectWrapper>

      <ActionButtons
        leftBtnText="Back"
        rightBtnText="Next"
        rightBtnClick={() => {
          if (
            nextStep &&
            checkFormValid(
              formData,
              formErrorState,
              setFormErrorState,
              formLabels,
            )
          )
            nextStep();
        }}
        leftBtnClick={() => {
          if (previousStep) previousStep();
        }}
        step={step}
      />
    </StepEightWrapper>
  );
};

export default Step8;
