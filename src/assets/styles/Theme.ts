import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadiusSmall: string;
    borderRadiusMedium: string;
    borderRadiusLarge: string;

    borderThickness: string;

    boxShadowSmall: string;
    boxShadowMedium: string;
    boxShadowLarge: string;

    colorRed: string;
    colorBlack: string;
    colorLightGray: string;
    colorGray: string;
    colorMediumGray: string;
    colorDarkGray: string;
    colorWhite: string;
    colorButtonText: string;
    colorButtonBorder: string;
    colorHostInfoBody: string;

    fontFamily1: string;
    fontFamily2: string;

    fontSizeExtraSmall: string;
    fontSizeSmall: string;
    fontSizeMedium: string;
    fontSizeLarge: string;
    fontSizeExtraLarge: string;
    fontSizeXXL: string;

    fontWeightRegular: string;
    fontWeightMedium: string;
    fontWeightSemibold: string;
    fontWeightBold: string;
  }
}

export const Theme: DefaultTheme = {
  borderRadiusSmall: '5px',
  borderRadiusMedium: '10px',
  borderRadiusLarge: '40px',

  borderThickness: '1px',

  boxShadowSmall: '0px 3px 3px rgba(0, 0, 0, 0.07)',
  boxShadowMedium: '0px 0px 20px rgba(0, 0, 0, 0.07)',
  boxShadowLarge: '35px 45px 73px rgba(32, 32, 35, 0.07)',

  colorRed: '#E54D42',
  colorBlack: '#000000',
  colorLightGray: '#F3F3F3',
  colorGray: '#F4F4F4',
  colorMediumGray: '#E5E5E5',
  colorDarkGray: '#BDBDBD',
  colorWhite: '#FFFFFF',
  colorButtonText: '#4C4C4C',
  colorButtonBorder: '#CECECE',
  colorHostInfoBody: '#353535',

  fontFamily1: 'DM Sans',
  fontFamily2: 'Roboto',
  fontSizeExtraSmall: '14px',
  fontSizeSmall: '18px',
  fontSizeMedium: '22px',
  fontSizeLarge: '35px',
  fontSizeExtraLarge: '72px',
  fontSizeXXL: '94px',

  fontWeightRegular: '400',
  fontWeightMedium: '500',
  fontWeightSemibold: '700',
  fontWeightBold: 'bold',
};

export default Theme;
