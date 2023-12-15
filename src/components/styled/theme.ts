import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  palette: {
    primary: {
      backgroundPrimary: "#EBE6E6",
      backgroundSecondary: "#FFFFFF",

      textPrimary: "#000000",
      textSecondary: "#0A0A0A",
    },
  },
  main: "#1DB954",
  danger: "	#df4759",

  light: "#fff",
  gray: "#0A0A0A", // dark gray light for dark theme
  lightWhite: "#ffffff1a",

  boxShadow: "0 35px 60px -30px",
  borderRadius: ".5rem",
};

export const darkTheme: DefaultTheme = {
  palette: {
    primary: {
      backgroundPrimary: "#191414",
      backgroundSecondary: "#000000",

      textPrimary: "#FFFFFF",
      textSecondary: "#F5F5F5",
    },
  },
  main: "#46E27C",
  danger: "	#B62032",

  light: "#fff",
  gray: "#F5F5F5",
  lightWhite: "#ffffff1a",

  boxShadow: "0 35px 60px -30px",
  borderRadius: ".5rem",
};

// export const darkTheme: DefaultTheme = {
//   palette: {
//     primary: {
//       light: "#fff",
//       main: "#1DB954",
//       background: "#191414",
//       dark: "#191414",
//       lightWhite: "#ffffff1a",
//       lightGray: "#F5F5F5",
//       darkGray: "#878787",
//       danger: "	#df4759",

//       textPrimary: "#fff",
//       textSecondary: "#191414",
//     },
//   },
//   boxShadow: "0 35px 60px -15px",
//   borderRadius: ".5rem",
// };
