"use client";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "ui/Button";
import StatusSquare from "ui/StatusCard";

export default function invoiceDetails() {
  return (
    <Container maxWidth="lg">
      <Stack spacing={2}>
        <Grid
          container
          item
          justifyContent="space-between"
          sx={{ backgroundColor: "red" }}
        >
          <Grid container item md={4} alignItems="center">
            <Grid>
              <Typography>Status</Typography>
            </Grid>
            <Grid>
              <StatusSquare sx={{ color: "lightTheme.pallette.warning.main" }}>
                Pending
              </StatusSquare>
            </Grid>
          </Grid>

          <Grid item padding={1}>
            <Stack spacing={2} direction="row" alignContent="center">
              <Button variant="contained">Edit</Button>
              <Button variant="contained">Delete</Button>
              <Button variant="contained">Mark as Paid</Button>
            </Stack>
          </Grid>
        </Grid>

        <Grid container item sx={{ backgroundColor: "blue" }}>
          <Grid container item justifyContent="space-between">
            <Grid item>
              <Typography>Invoice number</Typography>
              <Typography>Concept</Typography>
            </Grid>
            <Grid item>
              <Typography>Provider Adress</Typography>
            </Grid>
          </Grid>

          <Grid container item sx={{ backgroundColor: "green" }}>
            <Grid item md={4}>
              <Typography>Invoice Date</Typography>
            </Grid>
            <Grid item md={4}>
              <Typography>Bill To</Typography>
            </Grid>
            <Grid item md={4}>
              <Typography>Sent to</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
