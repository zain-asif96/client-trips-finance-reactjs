import React, { useState } from 'react';
import { StepSevenWrapper, StepSevenHead } from './Step1Style';
import RightIconInputField from '../../../../generals/right_icon_input_field/RightIconInputField';
import LeftIconTextArea from '../../../left-icon-textarea/LeftIconTextArea';
import Address from '../../../address/Address';

import ActionButtons from '../../../../generals/ActionButtons/ActionButtons';
import { checkFormValid, setFieldValues } from '../../../../common/validations';
import { useHistory } from 'react-router-dom';
import { PropertyProps } from '../../../../../state/properties/propertiesActionsType';

type VoidFunction = () => void;

interface StepProps {
  updateData?: (updatedData: PropertyProps) => void;
  handleSubmit?: VoidFunction;
  nextStep?: VoidFunction;
  previousStep?: VoidFunction;
  formData: PropertyProps;
  step: number;
  isBNFT: boolean;
}

const Step7: React.FC<StepProps> = ({
  nextStep,
  updateData,
  formData,
  step,
  isBNFT,
}: StepProps) => {
  const history = useHistory();
  const formLabels = {
    baseListing: {
      name: 'Name',
      description: 'Description',
    },
    address: {
      address1: 'Address 1',
      city: 'City',
      district: 'District',
      postalCode: 'Postal Code',
      country: 'Country',
    },
  };
  const [formErrorState, setFormErrorState] = useState({
    baseListing: {
      name: '',
      description: '',
    },
    address: {
      address1: '',
      city: '',
      district: '',
      postalCode: '',
      country: '',
    },
  });

  return (
    <StepSevenWrapper>
      <StepSevenHead>
        What city/state is your property in, and what is its street address?
      </StepSevenHead>
      <RightIconInputField
        placeholder="Name:"
        value={formData?.baseListing.name}
        onChange={(value) =>
          setFieldValues(
            'name',
            value,
            'baseListing',
            formLabels.baseListing,
            setFormErrorState,
            formData,
            updateData,
          )
        }
        hasError={formErrorState.baseListing.name}
        isDisable={isBNFT}
      />
      <LeftIconTextArea
        placeholder="Desc:"
        value={formData?.baseListing.description}
        onChange={(value) =>
          setFieldValues(
            'description',
            value,
            'baseListing',
            formLabels.baseListing,
            setFormErrorState,
            formData,
            updateData,
          )
        }
        hasError={formErrorState.baseListing.description}
        isDisable={isBNFT}
      />

      <Address
        data={formData.address}
        formErrorState={formErrorState.address}
        onChange={(field, value) =>
          setFieldValues(
            field,
            value,
            'address',
            formLabels.address,
            setFormErrorState,
            formData,
            updateData,
          )
        }
        isDisable={isBNFT}
      />
      {/* <div onClick={() => updateData('id', 'just an example')}>
        Add your data
      </div> */}
      <ActionButtons
        rightBtnText="Next"
        leftBtnText="Back"
        rightBtnClick={() => {
          if (
            nextStep &&
            (checkFormValid(
              formData,
              formErrorState,
              setFormErrorState,
              formLabels,
            ) ||
              isBNFT)
          )
            nextStep();
        }}
        leftBtnClick={() => {
          history.goBack();
        }}
        step={step}
      />
    </StepSevenWrapper>
  );
};

export default Step7;
