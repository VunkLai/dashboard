import React from "react";
import { Outlet } from "react-router-dom";
import { experimentalStyled } from "@material-ui/core/styles";

const ErrorLayoutRoot = experimentalStyled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100%",
  padding: 50,
}));

const ErrorMessage = experimentalStyled("div")(({ theme }) => ({
  textAlign: "center",
  fontSize: theme.typography.h3.fontSize,
  fontWeight: theme.typography.fontWeightBold,
}));

const Footer = experimentalStyled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  textAlign: "right",
  // fontWeight: theme.typography.fontWeightMedium,
  fontSize: theme.typography.fontSize,
}));

function ErrorLayout({ children }) {
  return (
    <ErrorLayoutRoot>
      <ErrorMessage>{children || <Outlet />}</ErrorMessage>
      <Footer>create by Vunk.Lai</Footer>
    </ErrorLayoutRoot>
  );
}

export default ErrorLayout;
