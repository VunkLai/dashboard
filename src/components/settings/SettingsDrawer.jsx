import React from "react";
import { useContext } from "react";
import { Box, Button } from "@material-ui/core";
import { SettingsContext } from "../../settings";

const useSettings = () => useContext(SettingsContext);

function SettingsDrawer() {
  const { settings, saveSettings } = useSettings();

  return (
    <div>
      {settings.theme}
      <Box>
        <Button
          color="primary"
          fullWidth
          variant="contained"
          // onClick={() => saveSettings()}
        >
          Save Settings
        </Button>
      </Box>
    </div>
  );
}

export default SettingsDrawer;
