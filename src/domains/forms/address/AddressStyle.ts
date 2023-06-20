import styled from 'styled-components';

const StepSevenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 598px;
  width: 100%;
  margin: auto;
`;

const StepSevenHead = styled.h3`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  color: #353535;
  margin-bottom: 64px;
  text-align: center;
`;

const FormGroupRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const FormGroupLeftColumn = styled.div`
  padding-right: 16px;
  width: 50%;
  @media (max-width: 767px) {
    padding-right: 0px;
    width: 100%;
  }
`;

const FormGroupRightColumn = styled.div`
  padding-left: 16px;
  width: 50%;
  @media (max-width: 767px) {
    padding-left: 0px;
    width: 100%;
  }
`;
export {
  StepSevenWrapper,
  StepSevenHead,
  FormGroupRow,
  FormGroupLeftColumn,
  FormGroupRightColumn,
};
