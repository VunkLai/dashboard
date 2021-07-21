import React from "react";
import { useRoutes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

import SettingsDrawer from "./components/settings/SettingsDrawer";
import routes from "./routes";
import useThemes from "./theme";
import { THEMES } from "./constants";

function App() {
  const content = useRoutes(routes);
  const theme = useThemes({
    theme: THEMES.LIGHT,
    responsiveFontSizes: true,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SettingsDrawer />
      {content}
    </ThemeProvider>
  );
}

export default App;
