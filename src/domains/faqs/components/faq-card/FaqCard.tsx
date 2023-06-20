import React from 'react';

import {
  FaqBoxContainer,
  FaqImageWrapper,
  FaqImage,
  FaqTextWrapper,
  FaqText,
} from './FaqCardStyle';

const FaqCard: React.FC = (props: any) => (
  <FaqBoxContainer>
    <FaqImageWrapper>
      <FaqImage src={props.image} />
    </FaqImageWrapper>
    <FaqTextWrapper>
      <FaqText>{props.question}</FaqText>
    </FaqTextWrapper>
  </FaqBoxContainer>
);

export default FaqCard;
