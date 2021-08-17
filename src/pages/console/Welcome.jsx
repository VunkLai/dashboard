import React from "react";

import { experimentalStyled } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import Stack from "@material-ui/core/Stack";
import Button from "@material-ui/core/Button";

const CardItem = experimentalStyled(Card)(({ theme }) => ({
  textAlign: "center",
  minHeight: 512 + 128,
  paddingTop: 64 * 2,
  border: "none",
  boxShadow: "none",
}));

const useStyles = makeStyles({
  cardContent: {
    display: "flex",
    justifyContent: "center",
  },
});

export default function Welcome() {
  const classes = useStyles();

  return (
    <CardItem>
      <CardHeader
        title="Welcome to Server"
        subheader="Short slogan or description"
      />
      <CardContent className={classes.cardContent}>
        <Stack spacing={2} direction="row">
          <Button variant="contained">Sign in</Button>
          <Button variant="outlined">Try Demo</Button>
        </Stack>
      </CardContent>
    </CardItem>
  );
}
