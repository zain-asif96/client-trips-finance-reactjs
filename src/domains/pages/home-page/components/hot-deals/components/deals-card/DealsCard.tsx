import React from 'react';
import { useHistory } from 'react-router-dom';
import { PATHS } from '../../../../../../../globals';

import {
  DealsCardBoxContainer,
  DealsDetailBox,
  DestinationImage,
  DestinationImageWrapper,
  DestinationName,
} from './DealsCardStyle';

interface Props {
  country: string;
  district: string;
  imagePath: string;
}

const CardGrid: React.FC<Props> = ({ country, district, imagePath }: Props) => {
  const history = useHistory();
  return (
    <DealsCardBoxContainer
      onClick={() =>
        history.push(`${PATHS.PropertyListing}#${country},${district}`)
      }
    >
      <DestinationImageWrapper>
        <DestinationImage src={imagePath} />
      </DestinationImageWrapper>
      <DealsDetailBox>
        <DestinationName>{`${country}, ${district}`}</DestinationName>
      </DealsDetailBox>
    </DealsCardBoxContainer>
  );
};

export default CardGrid;
