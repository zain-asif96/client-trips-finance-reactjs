import React from 'react';
import { ErrorText } from '../../generals/error_message/ErrorMessageStyles';
import {
  LeftIconInput,
  InputWrapper,
  InputImage,
} from './LeftIconInputFieldStyle';

interface InputProps {
  placeholder: string;
  icon?: string;
  value?: string;
  onChange?: any;
  hasError?: string;
}

const LeftIconInputField: React.FC<InputProps> = ({
  placeholder,
  icon = '',
  value = '',
  onChange,
  hasError,
}: InputProps) => (
  <InputWrapper>
    <LeftIconInput
      type="text"
      placeholder={placeholder}
      style={{ paddingLeft: icon !== '' ? '60px' : '20px' }}
      value={value}
      onChange={(e) => {
        onChange && onChange(e.target.value);
      }}
    />
    <InputImage src={icon} />
    {hasError && <ErrorText>{hasError}</ErrorText>}
  </InputWrapper>
);

export default LeftIconInputField;
