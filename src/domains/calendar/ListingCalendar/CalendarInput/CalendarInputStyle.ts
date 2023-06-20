import styled from 'styled-components';

const CalenderContainer = styled.div`
  position: relative;
  width: 100%;
`;

const CalenderContent = styled.div`
  position: absolute;
  top: 58px;
  left: 0;
  width: 100%;
  z-index: 1;
`;

export { CalenderContainer, CalenderContent };
