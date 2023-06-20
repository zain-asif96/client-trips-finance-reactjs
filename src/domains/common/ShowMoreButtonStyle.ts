import styled from 'styled-components';

export const Button = styled.button`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  margin-left: 5px;
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colorRed};
`;
