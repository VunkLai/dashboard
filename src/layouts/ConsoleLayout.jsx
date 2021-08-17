import React from "react";
import { Outlet } from "react-router-dom";

import { experimentalStyled } from "@material-ui/core/styles";

import Stack from "@material-ui/core/Stack";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import CircleIcon from "@material-ui/icons/Circle";

const StackItem = experimentalStyled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  Height: 512,
  minHeight: 512,
  minWidth: 512,
  border: "none",
  boxShadow: "none",
}));

function ConsoleLayout() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
      sx={{ paddingTop: 16 }}
    >
      <StackItem>
        <Card
          align="center"
          sx={{
            boxShadow: "none",
            backgroundColor: "",
            height: 512,
            width: 512,
          }}
        >
          <CardHeader
            title={
              <div>
                <CircleIcon color="disabled" /> Service
              </div>
            }
          />
          <CardContent>
            <Paper
              sx={{
                width: 256 + 128,
                height: 256 + 128,
                background: "LightGray",
              }}
            ></Paper>
          </CardContent>
        </Card>
      </StackItem>
      <StackItem>
        <Outlet />
      </StackItem>
    </Stack>
  );
}

export default ConsoleLayout;
