import styled from 'styled-components';

const Container = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  padding-bottom: 21px;
`;

const MainRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 767px) {
    justify-content: flex-start;
  }
`;

const AmneitiesHeading = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  margin-bottom: 20px;
`;

export { Container, MainRow, AmneitiesHeading };
