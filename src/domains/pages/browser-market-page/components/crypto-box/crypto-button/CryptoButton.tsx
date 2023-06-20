import React from 'react';
import { CryptoBtn, CryptoBtnContainer } from './CryptoButtonStyle';
import { useHistory } from 'react-router-dom';
import { PATHS } from '../../../../../../globals';

const CryptoButton: React.FC = () => {
  const history = useHistory();
  return (
    <CryptoBtnContainer>
      <CryptoBtn onClick={() => history.push(PATHS.Faqs)}>
        Earn Crypto
      </CryptoBtn>
    </CryptoBtnContainer>
  );
};

export default CryptoButton;
