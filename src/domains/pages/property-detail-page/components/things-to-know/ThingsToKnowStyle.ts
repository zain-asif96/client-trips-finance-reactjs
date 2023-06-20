import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 21px 0;
`;

export const ThingsToKnowHeading = styled.p`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeightMedium};
  font-size: ${({ theme }) => theme.fontSizeMedium};
  margin-bottom: 29.5px;

  color: ${({ theme }) => theme.colorBlack};
`;

export const ThingsToKnowRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding-left: 0;
  margin-bottom: 37px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Button = styled.a`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeightMedium};
  font-size: 15px;

  text-align: center;
  text-decoration-line: underline;

  color: ${({ theme }) => theme.colorRed};
`;
