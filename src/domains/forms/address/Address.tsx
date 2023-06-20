import React from 'react';
import LocationIcon from '../../../assets/images/location-icon.png';
import {
  FormGroupRow,
  FormGroupLeftColumn,
  FormGroupRightColumn,
} from './AddressStyle';
import RightIconInputField from '../../generals/right_icon_input_field/RightIconInputField';

interface StepProps {
  data?: any;
  formErrorState?: any;
  onChange?: (field: string, value: string) => void;
  isDisable?: boolean;
  // nextStep?: VoidFunction;
  // previousStep?: VoidFunction;
}

const Step7: React.FC<StepProps> = ({
  data,
  formErrorState,
  onChange,
  isDisable,
}: StepProps) => {
  return (
    <>
      <RightIconInputField
        placeholder="Address 1:"
        icon={LocationIcon}
        value={data.address1}
        onChange={(value) => onChange && onChange('address1', value)}
        hasError={formErrorState.address1}
        isDisable={isDisable}
      />
      <RightIconInputField
        placeholder="Address 2:"
        icon={LocationIcon}
        value={data.address2}
        onChange={(value) => onChange && onChange('address2', value)}
        isDisable={isDisable}
      />
      <FormGroupRow>
        <FormGroupLeftColumn>
          <RightIconInputField
            placeholder="City:"
            value={data.city}
            onChange={(value) => onChange && onChange('city', value)}
            hasError={formErrorState.city}
            isDisable={isDisable}
          />
        </FormGroupLeftColumn>
        <FormGroupRightColumn>
          <RightIconInputField
            placeholder="District:"
            value={data.district}
            onChange={(value) => onChange && onChange('district', value)}
            hasError={formErrorState.district}
            isDisable={isDisable}
          />
        </FormGroupRightColumn>
      </FormGroupRow>
      <FormGroupRow>
        <FormGroupLeftColumn>
          <RightIconInputField
            placeholder="Postal Code:"
            value={data.postalCode}
            onChange={(value) => onChange && onChange('postalCode', value)}
            hasError={formErrorState.postalCode}
            isDisable={isDisable}
          />
        </FormGroupLeftColumn>
        <FormGroupRightColumn>
          <RightIconInputField
            placeholder="Country:"
            value={data.country}
            onChange={(value) => onChange && onChange('country', value)}
            hasError={formErrorState.country}
            isDisable={isDisable}
          />
        </FormGroupRightColumn>
      </FormGroupRow>
    </>
  );
};

export default Step7;
