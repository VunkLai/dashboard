import React from "react";
import { createContext, useState, useEffect } from "react";
import { THEMES } from "./constants";

const initialSettings = {
  compact: true,
  responsiveFontSizes: false,
  roundedCorners: true,
  theme: THEMES.LIGHT,
};

function SettingsDumps() {
  // get settings from browser storage
  try {
    const dumpedData = window.localStorage.getItem("settings");
    if (dumpedData) {
      return JSON.parse(dumpedData);
    } else {
      let settings = initialSettings;
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        settings.theme = THEMES.DARK;
      } else {
        settings.theme = THEMES.LIGHT;
      }
      return settings;
    }
  } catch (err) {
    // JSON.parse failure
    console.error(new Error(String(err)));
  }
}

function SettingsLoads(settings) {
  // set settings to browser storage
  window.localStorage.setItem("settings", JSON.stringify(settings));
}

export const SettingsContext = createContext({
  settings: initialSettings,
  saveSettings: () => {},
});

export function SettingsProvider(props) {
  const { children } = props; // the children in component tree
  const [settings, setSettings] = useState(initialSettings);

  useEffect(() => {
    const dumpedSettings = SettingsDumps();
    if (dumpedSettings) {
      setSettings(dumpedSettings);
    }
  }, []);

  function saveSettings(updatedSettings) {
    setSettings(updatedSettings);
    SettingsLoads(updatedSettings);
  }

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export default SettingsContext;
