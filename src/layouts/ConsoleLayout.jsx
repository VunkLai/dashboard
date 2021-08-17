import React from "react";
import { Outlet } from "react-router-dom";

import { experimentalStyled } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import CircleIcon from "@material-ui/icons/Circle";

const ConsoleLayoutRoot = experimentalStyled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100%",
  marginTop: "64px",
}));

const CardItem = experimentalStyled(Card)(({ theme }) => ({
  textAlign: "center",
  minHeight: 512 + 128,
  border: "none",
  boxShadow: "none",
}));

const useStyles = makeStyles({
  cardHeaderTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

function ConsoleLayout() {
  const classes = useStyles();

  return (
    <ConsoleLayoutRoot>
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CardItem>
              <CardHeader
                title={
                  <div className={classes.cardHeaderTitle}>
                    <CircleIcon color="disabled" /> Service
                  </div>
                }
              />
              <CardContent sx={{ display: "inline-block" }}>
                <Paper
                  sx={{ width: 512, height: 512, background: "Gainsboro" }}
                ></Paper>
              </CardContent>
            </CardItem>
          </Grid>
          <Grid item xs={6}>
            <CardItem>
              <Outlet />
            </CardItem>
          </Grid>
        </Grid>
      </Container>
    </ConsoleLayoutRoot>
  );
}

export default ConsoleLayout;
