import React from "react";
import { Outlet } from "react-router-dom";
import { experimentalStyled } from "@material-ui/core/styles";

const ConsoleLayoutRoot = experimentalStyled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100%",
}));

function ConsoleLayout() {
  return (
    <ConsoleLayoutRoot>
      <div className="consoleLayout">Console Layout</div>
      <Outlet />
    </ConsoleLayoutRoot>
  );
}

export default ConsoleLayout;
