import React from "react";
import { Outlet } from "react-router-dom";
import { experimentalStyled } from "@material-ui/core/styles";

const MainLayoutRoot = experimentalStyled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100%",
}));

function MainLayout() {
  return (
    <MainLayoutRoot>
      <Outlet />
    </MainLayoutRoot>
  );
}

export default MainLayout;
