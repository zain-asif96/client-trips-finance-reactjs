import React from 'react';
import { TripBtn, TripBtnContainer } from './TripButtonStyle';

const TripButton: React.FC<{ onClick: VoidFunction }> = ({
  onClick,
}: {
  onClick: VoidFunction;
}) => (
  <TripBtnContainer>
    <TripBtn onClick={() => onClick && onClick()}>Find me a trip</TripBtn>
  </TripBtnContainer>
);

export default TripButton;
