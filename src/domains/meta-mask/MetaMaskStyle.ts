import styled from 'styled-components';

const Container = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
`;

const MainRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 810px) {
    flex-direction: column;
  }
`;

export { Container, MainRow };
