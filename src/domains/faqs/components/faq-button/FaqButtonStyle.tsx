import styled from 'styled-components';

const FaqBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;

  @media (max-width: 767px) {
    margin-top: 40px;
  }
`;

const FaqBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  background-color: #e54d42;
  border-radius: 10px;
  width: 272px;
  height: 72px;
  padding: 15px 40px;
  cursor: pointer;
`;

export { FaqBtnContainer, FaqBtn };
