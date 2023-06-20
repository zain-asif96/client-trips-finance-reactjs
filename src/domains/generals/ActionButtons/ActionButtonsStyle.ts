import styled from 'styled-components';

const ActionBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 70px;
  @media (max-width: 767px) {
    margin-top: 40px;
  }
`;
const FormSteps = styled.div`
  font-size: 18px;
`;
export { ActionBtnContainer, FormSteps };
