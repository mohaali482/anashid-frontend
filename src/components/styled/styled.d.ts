import "styled-components";

interface IPalette {
  main: string;
  dark: string;
  lightWhite: string;
  light: string;
  lightGray: string;
  darkGray: string;
  danger: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      primary: IPalette;
    };
    boxShadow: string;
    borderRadius: string;
  }
}
