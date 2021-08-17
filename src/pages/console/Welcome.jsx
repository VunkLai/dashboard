import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import Stack from "@material-ui/core/Stack";
import Button from "@material-ui/core/Button";

export default function Welcome() {
  return (
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
        title="Welcome to Astra"
        subheader="Short slogan or description"
        sx={{ paddingTop: 16 }}
      />
      <CardContent sx={{ display: "inline-block" }}>
        <Stack spacing={2} direction="row">
          <Button variant="contained">Sign in</Button>
          <Button variant="outlined">Try Demo</Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
