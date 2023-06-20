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
  DestinationAmount,
} from './OpenListingCardStyle';

const CardGrid: React.FC = (props: any) => {
  const history = useHistory();
  return (
    <DealsCardBoxContainer
      onClick={() => history.push(PATHS.PropertyDetailPage)}
    >
      <DestinationImageWrapper>
        <DestinationImage src={props.destination_image} />
      </DestinationImageWrapper>

      <DealsDetailBox>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <DestinationName>
            {`${props.destination_country}, ${props.destination_name}`}
          </DestinationName>
          <DestinationAmount>{props.amount}</DestinationAmount>
        </div>

        <DurationWrapper>
          <DurationTime>{props.destination_addreess}</DurationTime>
        </DurationWrapper>

        <DurationTime>{`${props.check_in} - ${props.check_out}`}</DurationTime>
      </DealsDetailBox>
    </DealsCardBoxContainer>
  );
};

export default CardGrid;
