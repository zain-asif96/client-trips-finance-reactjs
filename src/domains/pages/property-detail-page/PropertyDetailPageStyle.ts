import styled from 'styled-components';

const Container = styled.main`
  max-width: 1280px;
  width: 100%;
  margin: 80px auto;

  @media (max-width: 767px) {
    margin: 40px auto;
  }
`;

const MainRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 1em;
  margin-top: 51px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Col1 = styled.div`
  width: 70%;
  padding-right: 37px;
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0;
  }
`;

const Col2 = styled.div`
  width: 30%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export { Container, MainRow, Col1, Col2 };
