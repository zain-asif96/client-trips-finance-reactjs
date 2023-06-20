import React from 'react';

import {
  MetaMaskBoxContainer,
  MetaMaskImageWrapper,
  MetaMaskImage,
  MetaMaskText,
} from './CardGridStyle';

const CardGrid: React.FC = (props: any) => (
  <MetaMaskBoxContainer onClick={props.onClick}>
    <MetaMaskImageWrapper>
      <MetaMaskImage src={props.icon} />
    </MetaMaskImageWrapper>
    <MetaMaskText>{props.text}</MetaMaskText>
  </MetaMaskBoxContainer>
);

export default CardGrid;
