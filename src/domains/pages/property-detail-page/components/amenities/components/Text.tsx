import React from 'react';

import { AmenityText } from './TextStyle';

interface Props {
  textString: string;
}

const Text: React.FC<Props> = ({ textString }: Props) => (
  <AmenityText>{textString}</AmenityText>
);

export default Text;
