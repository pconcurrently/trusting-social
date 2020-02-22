type IThemeName = 'dark' | 'light';

export interface IApplicationTheme {
  NAME: IThemeName;
  PRIMARY: string;
  BASE_TEXT: string;
  BASE_BACKGROUND: string;
  BORDER: string;
}

export const darkTheme: IApplicationTheme = {
  NAME: 'dark',
  PRIMARY: 'black',
  BASE_TEXT: '#CDCDCD;',
  BASE_BACKGROUND: '#0E0E0E',
  BORDER: '#565656',
};

export const lightTheme: IApplicationTheme = {
  NAME: 'light',
  PRIMARY: 'red',
  BASE_TEXT: '#484848',
  BASE_BACKGROUND: '#F8F8F8',
  BORDER: '#EBEBEB',
};

const sizes = {
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
};

export const devices = {
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`,
};
