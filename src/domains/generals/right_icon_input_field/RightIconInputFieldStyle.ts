import styled from 'styled-components';

const InputImage = styled.img`
  color: #a7a7a7;
  position: absolute;
  top: 0;
  right: 20px;
  margin: auto;
  bottom: 0;
  width: 14px;
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
  position: relative;
`;

const RightIconInput = styled.input`
  padding: 16px 20px;
  color: #252525;
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
    color: #252525;
  }

  :focus {
    outline: none;
  }
`;

export { InputWrapper, RightIconInput, InputImage };
