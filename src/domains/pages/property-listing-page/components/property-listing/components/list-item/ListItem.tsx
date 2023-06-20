import React from 'react';
import { useHistory } from 'react-router-dom';
import { PATHS } from '../../../../../../../globals';

import {
  DealsCardBoxContainer,
  DealsDetailBox,
  DestinationImage,
  DestinationImageWrapper,
  DestinationName,
  DurationTime,
  DurationWrapper,
} from './ListItemStyle';

const CardGrid: React.FC = (props: any) => {
  const history = useHistory();
  return (
    <DealsCardBoxContainer
      onClick={() => history.push(`${PATHS.PropertyDetailPage}#${props.id}`)}
    >
      <DestinationImageWrapper>
        <DestinationImage src={props.destination_image} />
      </DestinationImageWrapper>
      <DealsDetailBox>
        <DestinationName>{props.title}</DestinationName>
        <DurationWrapper>
          <DurationTime>{`${props.distance} km away`}</DurationTime>
          <DurationTime>{`${props.price} / night`}</DurationTime>
        </DurationWrapper>
      </DealsDetailBox>
    </DealsCardBoxContainer>
  );
};

export default CardGrid;
