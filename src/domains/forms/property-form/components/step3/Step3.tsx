import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import BoardIcon from '../../../../../assets/images/board-icon.png';
import {
  StepEightWrapper,
  StepEightHead,
  MultiSelectWrapper,
} from './Step3Style';
import LeftIconTextArea from '../../../left-icon-textarea/LeftIconTextArea';
import ActionButtons from '../../../../generals/ActionButtons/ActionButtons';
import { ErrorText } from '../../../../generals/error_message/ErrorMessageStyles';
import { checkFormValid, setFieldValues } from '../../../../common/validations';
import { useAppDispatch, useAppSelector } from '../../../../../state/hooks';
import {
  Amenity,
  HouseRule,
  PropertyProps,
} from '../../../../../state/properties/propertiesActionsType';
import {
  getAmenities,
  getHouseRules,
} from '../../../../../state/properties/propertiesActions';

// const formFieldText = {
//   selfCheckPolicy: 'Self check in policy',
//   houseRulesPolicy: 'House rules policy',
//   // kycPolicy: 'KYC policy',
// };

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
  const dispatch = useAppDispatch();
  const { propertiesReducer: properties } = useAppSelector((state) => state);
  const formLabels = {
    baseListing: {
      extraPolicy: 'Extra Policy',
      selfCheckPolicy: 'Self Check Policy',
    },
    houseRuleIds: 'House Rules Policy',
    amenityIds: 'Amenities',
  };
  const [formErrorState, setFormErrorState] = useState({
    baseListing: {
      extraPolicy: '',
      selfCheckPolicy: '',
    },
    houseRuleIds: '',
    amenityIds: '',
  });

  useEffect(() => {
    dispatch(getAmenities());
    dispatch(getHouseRules());
  }, []);

  return (
    <StepEightWrapper>
      <StepEightHead>
        Anything else guests should know about your BNFT? If you have any
        abnormal policies that aren’t covered in standard forms, this is where
        you should disclose that.
      </StepEightHead>
      <LeftIconTextArea
        placeholder=""
        icon={BoardIcon}
        value={formData?.baseListing.extraPolicy}
        onChange={(value) =>
          setFieldValues(
            'extraPolicy',
            value,
            'baseListing',
            formLabels.baseListing,
            setFormErrorState,
            formData,
            updateData,
          )
        }
        hasError={formErrorState.baseListing.extraPolicy}
      />

      <StepEightHead>Self Check In Policy</StepEightHead>
      <LeftIconTextArea
        placeholder=""
        icon={BoardIcon}
        value={formData?.baseListing.selfCheckPolicy}
        onChange={(value) =>
          setFieldValues(
            'selfCheckPolicy',
            value,
            'baseListing',
            formLabels.baseListing,
            setFormErrorState,
            formData,
            updateData,
          )
        }
        hasError={formErrorState.baseListing.selfCheckPolicy}
      />

      <StepEightHead>House Rules Policy</StepEightHead>
      <MultiSelectWrapper>
        <Select
          options={properties.houseRules.map((houseRule: HouseRule) => ({
            value: houseRule.id,
            label: houseRule.name,
          }))}
          closeMenuOnSelect={false}
          isMulti
          styles={{
            control: (styles) => ({
              ...styles,
              ...{ backgroundColor: '#f4f4f4' },
            }),
          }}
          value={formData.houseRuleIds}
          onChange={(selectedOption) =>
            setFieldValues(
              'houseRuleIds',
              selectedOption,
              '',
              formLabels,
              setFormErrorState,
              formData,
              updateData,
            )
          }
        />
        {formErrorState.houseRuleIds && (
          <ErrorText>{formErrorState.houseRuleIds}</ErrorText>
        )}
      </MultiSelectWrapper>
      <StepEightHead>Amenities</StepEightHead>
      <MultiSelectWrapper>
        <Select
          options={properties.amenities.map((amenity: Amenity) => ({
            value: amenity.id,
            label: amenity.name,
          }))}
          closeMenuOnSelect={false}
          isMulti
          styles={{
            control: (styles) => ({
              ...styles,
              ...{ backgroundColor: '#f4f4f4' },
            }),
          }}
          value={formData?.amenityIds}
          onChange={(selectedOption) =>
            setFieldValues(
              'amenityIds',
              selectedOption,
              '',
              formLabels,
              setFormErrorState,
              formData,
              updateData,
            )
          }
        />
        {formErrorState.amenityIds && (
          <ErrorText>{formErrorState.amenityIds}</ErrorText>
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
