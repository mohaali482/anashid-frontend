import "styled-components";

interface IPalette {
  main: string;
  dark: string;
  light: string;
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
