import styled from 'styled-components';

export const Main = styled.main`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.main`
  width: 100%;
  height: 25px;
  text-align: left;
  color: #353535;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  margin: 10px;
`;

export const MapContainer = styled.main`
  width: 100%;
`;

export const Location = styled.main`
  width: 100%;
  margin: 50px 0 0;
  color: ${({ theme }) => theme.colorHostInfoBody};
  font-family: ${({ theme }) => theme.fontFamily1};
  font-size: ${({ theme }) => theme.fontSizeExtraSmall};
  font-weight: 500;
`;
