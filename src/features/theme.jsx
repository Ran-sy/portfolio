import { createTheming } from "react-color-theme";

export const [ThemeProvider, useTheme, themes] = createTheming(
  {
    // default
    background: "#0F0F10",
    foreground: "#4E4E50",
    primary: "#6D6D6F",
    secondary: "#A0A0A2",
    text: "#D0D0D2",
    title: "#45a29e", //logo-700
    yellow: "#ffc83d",
  },
  {
    dark: {
      background: "#0F0F10", //night
      foreground: "#4E4E50", //gray-400
      primary: "#6D6D6F", //gray-300
      secondary: "#A0A0A2", //gray-200
      text: "#D0D0D2", // gray-100
    },
    light: {
      background: " #F5F5F5", //white smoke
      foreground: "#A4A4A4", //silver
      primary: "#8AB8B9", // logo-200
      secondary: "#52B4D8", //logo-400
      text: "#232323", // Eerie black
    },
  }
);
