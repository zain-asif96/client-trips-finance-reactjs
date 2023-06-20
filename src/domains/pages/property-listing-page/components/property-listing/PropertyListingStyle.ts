import styled from 'styled-components';

const Container = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
`;

const MainRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 740px) {
    align-items: flex-start;
  }
  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

export { Container, MainRow };
