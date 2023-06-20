import React from 'react';
import Icon from '../../../../../common/Icon';
import Text from './Text';
import { Container } from './AmenityItemStyle';

interface Props {
  icon: string;
  text: string;
}

const AmenityItem: React.FC<Props> = ({ icon, text }: Props) => (
  <Container>
    <Icon icon={icon} />
    <div style={{ marginRight: '10px' }}></div>
    <Text textString={text} />
  </Container>
);

export default AmenityItem;
