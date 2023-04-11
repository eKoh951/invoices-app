"use client";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Button } from "ui/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { InvoiceCard } from "ui/InvoiceCard";

export default function invoicesList() {
  return (
    <Container>
      <Grid container justifyContent="space-between">
        <Grid>
          <Typography>Invoices</Typography>
        </Grid>
        <Grid direction="row" alignItems="center">
          <Grid>
            <Typography>Filter</Typography>
          </Grid>
          <Grid>
            <Button
              variant="contained"
              startIcon={<AddCircleIcon />}
              sx={{ color: "primary.main", textTransform: "none" }}
            >
              New Invoice
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <InvoiceCard />
      </Grid>
    </Container>
  );
}
