import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  flex: 0 0 33.333333%;
  margin-bottom: 25px;
  @media (max-width: 700px) {
    flex: 0 0 50%;
  }
  @media (max-width: 480px) {
    flex: 0 0 100%;
  }
`;
