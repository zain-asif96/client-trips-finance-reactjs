import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Main2 = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.main`
  width: 100%;
  height: 25px;
  text-align: left;
  color: #353535;
  font-family: Roboto;
  font-size: 23px;
  font-weight: 900;
  line-height: 29px;
  letter-spacing: 0em;
  margin: 10px;
`;

export const Paragraph1 = styled.main`
  /*flex-grow: 1;*/
  color: ${({ theme }) => theme.colorButtonText};
  font-family: Roboto;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizeExtraSmall};
  display: flex;
  width: 100%;
  height: 25px;
  text-align: left;
  justify-content: flex-start;
  margin: 15px;
  padding: 15px 0;
  align-items: center;
`;

export const CalendarContainer = styled.main`
  /*flex-grow: 1;*/
  display: flex;
  width: 100%;
  justify-content: flex-start;
  /*margin: 50px;*/
  height: 380px;
  margin: 10px;
`;

export const BottomComponent = styled.main`
  /*flex-grow: 1;*/
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 10px;
`;
