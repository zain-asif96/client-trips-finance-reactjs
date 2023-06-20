import React from 'react';
import { ErrorText } from '../../generals/error_message/ErrorMessageStyles';
import {
  LeftIconInput,
  InputWrapper,
  InputImage,
} from './LeftIconTextAreaStyle';

interface InputProps {
  placeholder: string;
  icon?: string;
  value?: string;
  onChange?: (event: any) => void;
  hasError?: string;
  isDisable?: boolean;
}

const LeftIconTextArea: React.FC<InputProps> = ({
  placeholder,
  icon = '',
  value = '',
  onChange = (value) => value,
  hasError = '',
  isDisable,
}: InputProps) => (
  <InputWrapper>
    <LeftIconInput
      placeholder={placeholder}
      style={{ paddingLeft: icon !== '' ? '60px' : '20px' }}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      disabled={isDisable}
    />
    <InputImage src={icon} />
    {hasError && <ErrorText>{hasError}</ErrorText>}
  </InputWrapper>
);

export default LeftIconTextArea;
