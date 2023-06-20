import styled from 'styled-components';

const Container = styled.main``;

const TripFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 50px 45px;
  width: 686px;
  height: 398px;
  margin-top: 20px;
  background: #ffffff;
  border: 1px solid #f3f3f3;
  box-sizing: border-box;
  border-radius: 5px;
  @media (max-width: 1215px) {
    width: 100%;
  }
  @media (max-width: 767px) {
    padding: 20px 10px;
    height: 100%;
  }
`;

const LocationInputWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  position: relative;
`;

const LocationInput = styled.input`
  padding: 16px 20px;
  color: #a7a7a7;
  background: #f4f4f4;
  border: none;
  border-radius: 10px;
  height: 57px;
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily1};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #a7a7a7;
  }
  :-ms-input-placeholder {
    color: #a7a7a7;
  }
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

const SelectDropdown = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`;

export {
  Container,
  TripFormWrapper,
  LocationInputWrapper,
  LocationInput,
  FormGroupRow,
  FormGroupLeftColumn,
  FormGroupRightColumn,
  SelectDropdown,
};
