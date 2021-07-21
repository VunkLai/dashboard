import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import useThemes from "./theme";
import { THEMES } from "./constants";

const settings = {
  theme: THEMES.LIGHT,
  responsiveFontSizes: false,
};

function App() {
  const content = useRoutes(routes);
  const theme = useThemes({
    theme: settings.theme,
    responsiveFontSizes: settings.responsiveFontSizes,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {content}
    </ThemeProvider>
  );
}

export default App;
