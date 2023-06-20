import styled from 'styled-components';

const TripBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
`;

const TripBtn = styled.button`
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
  width: 189px;
  height: 51px;
  padding: 15px 40px;
  cursor: pointer;
`;

export { TripBtnContainer, TripBtn };
