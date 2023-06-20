import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex: 0 0 33.333333%;
  padding: 0 15px;
  :first-child {
    padding-left: 0;
  }
  :last-child {
    padding-right: 0;
  }
  @media (max-width: 700px) {
    flex: 0 0 100%;
    margin: 10px 0;
    padding: 0;
  }
`;

export const ThingsToKnowContainerCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ThingsToKnowSubHeading = styled.p`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeightMedium};
  font-size: 16px;
  margin-bottom: 29.5px;
  color: ${({ theme }) => theme.colorBlack};
`;
