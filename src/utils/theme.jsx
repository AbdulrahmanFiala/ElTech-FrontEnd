import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    type: "light",

    primary: {
      main: "#3160D8",
      header: "#ECF3FF",
    },
    secondary: {
      main: "#171717",
    },
    background: {
      default: "#fff",
      secondary: "#F9FBFF",
      secondary2: "#F6F7FB",
    },
    text: {
      primary: "#000000",
      secondary: "#3160D8",
    },
  },
  custom: {
    danger: "#FC0000",
    warning: "#FF5400",
    info: "#485db7",
  },
});

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#3160D8",
      header: "#333333",
    },
    secondary: {
      main: "#171717",
    },
    background: {
      default: "#CCCCCC",
      secondary: "#CAD8E7",
      secondary2: "#B5C6E2",
    },
    text: {
      primary: "#000000",
      secondary: "#3160D8",
    },
  },
  custom: {
    danger: "#FC0000",
    warning: "#FF5400",
    info: "#485db7",
  },
});

export { lightTheme, darkTheme };
