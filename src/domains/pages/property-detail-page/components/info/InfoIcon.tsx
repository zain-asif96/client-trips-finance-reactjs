import React from 'react';
import { Container } from './InfoIconStyle';

interface Props {
  icon: string;
}

const InfoIcon: React.FC<Props> = ({ icon }: Props) => {
  return (
    <Container>
      <img src={icon} />
    </Container>
  );
};

export default InfoIcon;
