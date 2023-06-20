import { css } from 'styled-components';

export default css`
  h1 {
    margin: 0px;
    font-family: ${({ theme }) => theme.fontFamily1};
    font-style: normal;
    font-weight: 900;
    font-size: 50px;
    line-height: 62px;
    color: ${({ theme }) => theme.colorBlack};
  }

  h2 {
    margin: 0px;
    font-family: ${({ theme }) => theme.fontFamily1};
    font-style: normal;
    font-weight: 900;
    font-size: 40px;
    line-height: 50px;
    color: ${({ theme }) => theme.colorBlack};
  }

  h3 {
    margin: 0px;
    font-family: ${({ theme }) => theme.fontFamily1};
    font-style: normal;
    font-weight: 800;
    font-size: 25px;
    line-height: 34px;
    color: ${({ theme }) => theme.colorBlack};
  }

  h4 {
    margin: 0px;
    font-family: ${({ theme }) => theme.fontFamily1};
    font-style: normal;
    font-weight: 800;
    font-size: 23px;
    line-height: 28px;
    color: ${({ theme }) => theme.colorBlack};
  }

  p {
    margin: 0px;
    font-family: ${({ theme }) => theme.fontFamily2};
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: ${({ theme }) => theme.colorBlack};
  }
`;
