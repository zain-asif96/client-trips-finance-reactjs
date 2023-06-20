import styled from 'styled-components';

const Container = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1em;
`;

const MainRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.07);
`;

export { Container, MainRow };
