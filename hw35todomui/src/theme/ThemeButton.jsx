import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepPurple, amber, indigo, deepOrange } from "@mui/material/colors";

const lightTheme = createTheme({
  palette: {
    primary: amber,
    secondary: deepPurple,
    type: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    primary: indigo,
    secondary: deepOrange,
    type: "dark",
  },
});

const Theme = ({ children, darkMode }) => {
  const theme = darkMode ? darkTheme : lightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
