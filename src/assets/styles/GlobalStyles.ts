import { createGlobalStyle } from 'styled-components';
import Reset from './Reset';
import TextElement from './TextElementReset';

const GlobalStyles = createGlobalStyle`
  ${Reset}
  ${TextElement}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    font-family: ${({ theme }) => theme.fontFamily1};
    position: relative;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display:block;
  }

  
`;

export default GlobalStyles;
