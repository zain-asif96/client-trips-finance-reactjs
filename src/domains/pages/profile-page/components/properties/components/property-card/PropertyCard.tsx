import React from 'react';
import { useHistory } from 'react-router-dom';
import { PATHS } from '../../../../../../../globals';

import {
  CreateBNFT,
  DealsCardBoxContainer,
  DealsDetailBox,
  DestinatioCountry,
  DestinationImage,
  DestinationImageWrapper,
  DestinationName,
  DestinationPrice,
  DurationTime,
  DurationWrapper,
  Overlay,
  TopSection,
  ViewProperty,
} from './PropertyCardStyle';

interface Props {
  country?: string;
  district?: string;
  imageURL?: string;
  name?: string;
  price?: string;
  checkIn?: string;
  checkOut?: string;
  type: string;
  id: string;
}

const CardGrid: React.FC<Props> = (props: Props) => {
  const history = useHistory();

  const navigateTo = () => {
    if (props.type !== 'listing') {
      history.push(`${PATHS.PropertyDetailPage}#${props.id}`);
    }
  };
  return (
    <DealsCardBoxContainer onClick={navigateTo}>
      {props.type === 'listing' && (
        <>
          <Overlay />
          <CreateBNFT
            onClick={() =>
              history.push({
                pathname: PATHS.CreateBNFT,
                state: props.id,
              })
            }
          >
            Create BNFT
          </CreateBNFT>
          <ViewProperty onClick={() => history.push(PATHS.PropertyDetailPage)}>
            View Property
          </ViewProperty>
        </>
      )}
      <DestinationImageWrapper>
        <DestinationImage src={props.imageURL} />
      </DestinationImageWrapper>
      <DealsDetailBox>
        <TopSection>
          {props.type === 'hot-deal-locale' ? (
            <DestinatioCountry>{`${props.name}`}</DestinatioCountry>
          ) : (
            <DestinatioCountry>
              {`${props.district}, ${props.country}`}
            </DestinatioCountry>
          )}
          <DestinationPrice>{`${props.price}`}</DestinationPrice>
        </TopSection>
        {props.type === 'hot-deal-locale' ? (
          <DestinationName>
            {`${props.district}, ${props.country}`}
          </DestinationName>
        ) : (
          <DestinationName>{`${props.name}`}</DestinationName>
        )}
        <DurationWrapper>
          <DurationTime>{`${props.checkIn} - ${props.checkOut}`}</DurationTime>
        </DurationWrapper>
      </DealsDetailBox>
    </DealsCardBoxContainer>
  );
};

export default CardGrid;
