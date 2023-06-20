import React from 'react';

import { Container } from './InfoItemStyle';
import InfoIcon from './InfoIcon';
import InfoText from './InfoText';

interface Props {
  title: string;
  description: string;
  icon: string;
}

const InfoItem: React.FC<Props> = ({ title, description, icon }: Props) => (
  <Container>
    <InfoIcon icon={icon} />
    <InfoText infoTitle={title} infoDescription={description} />
  </Container>
);

export default InfoItem;
