import React from 'react';
import { ButtonWrapper, Button } from './LeftBtnStyle';

interface LeftBtnProps {
  text: string;
  onClick(): void;
}

const LeftBtn: React.FC<LeftBtnProps> = ({ text, onClick }: LeftBtnProps) => (
  <ButtonWrapper onClick={onClick}>
    <Button>{text}</Button>
  </ButtonWrapper>
);

export default LeftBtn;
