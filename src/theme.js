import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { THEMES } from "./constants";

const Options = {
  [THEMES.LIGHT]: {},
  [THEMES.DARK]: {},
  [THEMES.VUNK]: {},
};

function useThemes(config = {}) {
  let option = Options[config.theme];
  if (!option) {
    console.warn(new Error(`The theme is invalid, get ${config.theme}`));
    option = Options[THEMES.LIGHT];
  }

  let theme = createTheme({ ...option });

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
}

export default useThemes;
