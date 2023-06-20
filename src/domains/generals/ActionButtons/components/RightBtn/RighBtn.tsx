import React from 'react';
import { ButtonWrapper, Button } from './RightBtnStyle';

interface RightBtnProps {
  text: string;
  onClick(): any;
}

const RightBtn: React.FC<RightBtnProps> = ({
  text,
  onClick,
}: RightBtnProps) => (
  <ButtonWrapper onClick={onClick}>
    <Button>{text}</Button>
  </ButtonWrapper>
);

export default RightBtn;
