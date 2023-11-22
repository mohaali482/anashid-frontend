import "styled-components";

interface IPalette {
  backgroundPrimary: string;
  backgroundSecondary: string;

  textPrimary: string;
  textSecondary: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      primary: IPalette;
    };

    main: string;
    light: string;
    danger: string;
    gray: string;
    lightWhite: string;
    boxShadow: string;
    borderRadius: string;
  }
}
