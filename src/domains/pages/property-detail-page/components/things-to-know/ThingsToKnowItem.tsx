import React from 'react';
import Icon from '../../../../common/Icon';
import Text from './ThingsToKnowText';
import { Container } from './ThingsToKnowItemStyle';

interface Props {
  listIcon: string;
  listItem: string;
}

const ThingsToKnowItem: React.FC<Props> = ({ listIcon, listItem }: Props) => (
  <Container>
    <Icon icon={listIcon} />
    <Text textString={listItem} />
  </Container>
);

export default ThingsToKnowItem;
