import styled from 'styled-components';
export const Container = styled.main`
  display: flex;
  flex-direction: column;
`;
export const AmenitiesHeading = styled.p`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeightMedium};
  font-size: ${({ theme }) => theme.fontSizeMedium};
  margin-bottom: 43px;
  color: ${({ theme }) => theme.colorBlack};
`;
export const AmenitiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding-left: 0;
  margin-bottom: 49.5px;
`;
export const Button = styled.button`
  padding: 10px 30px;
  width: 220px;
  height: 41px;
  background: ${({ theme }) => theme.colorWhite};
  border: 1px solid #cecece;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadiusMedium};
  margin-bottom: 21px;
  @media (max-width: 767px) {
    margin: 0 auto 21px;
  }
`;
