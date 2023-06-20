import styled from 'styled-components';

const InputImage = styled.img`
  color: #a7a7a7;
  position: absolute;
  top: 0;
  left: 20px;
  margin: auto;
  bottom: 0;
  width: 25px;
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  position: relative;
`;

const LeftIconInput = styled.input`
  padding: 16px 20px 16px 60px;
  color: #4c4c4c;
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

  :focus {
    outline: none;
  }
`;

export { InputWrapper, LeftIconInput, InputImage };
