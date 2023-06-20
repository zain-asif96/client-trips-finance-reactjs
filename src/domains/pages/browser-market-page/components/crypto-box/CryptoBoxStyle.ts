import styled from 'styled-components';
import CryptoBgImage from '../../../../../assets/images/crypto-bg.png';

const Container = styled.main`
  //   width: 100%;
`;

const CryptoBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 53px 44px;
  background: url(${CryptoBgImage});
  background-position: center;
  background-size: cover;
  width: 484px;
  height: 398px;
  margin-top: 20px;
  border-radius: 5px;
  @media (max-width: 1215px) {
    width: 100%;
  }
  @media (max-width: 767px) {
    padding: 20px 10px;
    height: 100%;
  }
`;

const CryptoBoxHeading = styled.p`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
`;

export { Container, CryptoBoxWrapper, CryptoBoxHeading };
