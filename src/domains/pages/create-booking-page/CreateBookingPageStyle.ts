import styled from 'styled-components';

const Container = styled.main`
  // max-width: 1280px;
  width: 100%;
`;

const MainRow = styled.div`
  max-width: 1280px;
  margin: 80px auto;
  width: 100%;
  padding: 0 1em;

  @media (max-width: 767px) {
    margin: 40px auto;
  }
`;

export { Container, MainRow };
