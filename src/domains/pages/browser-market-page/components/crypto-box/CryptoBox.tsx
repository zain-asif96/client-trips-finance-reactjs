import React from 'react';
import CryptoButton from './crypto-button/CryptoButton';
import { CryptoBoxWrapper, CryptoBoxHeading } from './CryptoBoxStyle';

const CryptoBox: React.FC = () => (
  <CryptoBoxWrapper>
    <CryptoBoxHeading>
      Earn crypto renting out your property. Click here to learn how!
    </CryptoBoxHeading>
    <CryptoButton />
  </CryptoBoxWrapper>
);

export default CryptoBox;
