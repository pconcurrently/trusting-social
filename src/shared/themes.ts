type IThemeName = 'dark' | 'light';

interface IApplicationTheme {
  NAME: IThemeName;
  PRIMARY: string;
  BASE_TEXT: string;
  BASE_BACKGROUND: string;
}

export const darkTheme: IApplicationTheme = {
  NAME: 'dark',
  PRIMARY: 'black',
  BASE_TEXT: 'white',
  BASE_BACKGROUND: 'black',
};

export const lightTheme: IApplicationTheme = {
  NAME: 'light',
  PRIMARY: 'red',
  BASE_TEXT: 'black',
  BASE_BACKGROUND: 'white',
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
