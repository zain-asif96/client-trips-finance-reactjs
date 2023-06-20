import React from 'react';
import Confused from '../../assets/images/confused.png';
import Wolf from '../../assets/images/wolf-icon.png';

import { Container, MainRow } from './MetaMaskStyle';
import CardGrid from './components/card-grid/CardGrid';

const META_MASK_DATA = [
  {
    text: 'Connect Metamask',
    icon: Wolf,
  },
  {
    text: 'Download Metamask',
    icon: Wolf,
  },
  {
    text: 'What is this? I’m Confused.',
    icon: Confused,
  },
];

interface MetaMaskProps {
  onItemClick(index: number): any;
}

const MetaMask: React.FC<MetaMaskProps> = (props: any) => (
  <Container>
    <MainRow>
      {META_MASK_DATA.map((item: any, index: number) => {
        return (
          <CardGrid
            key={index}
            {...item}
            onClick={() => props.onItemClick(index)}
          />
        );
      })}
    </MainRow>
  </Container>
);

export default MetaMask;
