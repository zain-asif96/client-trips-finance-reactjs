import React from 'react';

import {
  BedroomCountText,
  BedroomDescWrapper,
  BedroomHeading,
  BedroomImage,
  BedroomImageWrapper,
  SleepingArrangementContainer,
} from './SleepingArrangementItemStyle';

const SleepingArrangementCard: React.FC = (props: any) => (
  <SleepingArrangementContainer>
    <BedroomImageWrapper>
      <BedroomImage src={props.bed_icon} />
    </BedroomImageWrapper>
    <BedroomDescWrapper>
      <BedroomHeading>{props.bedroom_heading}</BedroomHeading>
      <BedroomCountText>{`${props.double_bed_count} double bed`}</BedroomCountText>
    </BedroomDescWrapper>
  </SleepingArrangementContainer>
);

export default SleepingArrangementCard;
