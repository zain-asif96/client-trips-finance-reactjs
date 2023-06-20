import React from 'react';
import { ErrorText } from '../error_message/ErrorMessageStyles';
import {
  RightIconInput,
  InputWrapper,
  InputImage,
} from './RightIconInputFieldStyle';

interface InputProps {
  placeholder: string;
  icon?: string;
  value?: string;
  onChange?: (event: any) => void;
  iconClick?: () => void;
  isDisable?: boolean;
  hasError?: string;
  type?: string;
}

const RightIconInputField: React.FC<InputProps> = ({
  placeholder,
  icon = '',
  value = '',
  type = 'text',
  iconClick = () => {
    console.log('');
  },
  isDisable = false,
  onChange = (value) => value,
  hasError = '',
}: InputProps) => (
  <InputWrapper>
    <RightIconInput
      type={type}
      placeholder={placeholder}
      style={{ paddingRight: icon !== '' ? '40px' : '20px' }}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      disabled={isDisable}
      onClick={() => iconClick && iconClick()}
    />
    <InputImage src={icon} />
    {hasError && <ErrorText>{hasError}</ErrorText>}
  </InputWrapper>
);

export default RightIconInputField;
