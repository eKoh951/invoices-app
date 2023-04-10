"use client";
import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "../../../packages/ui/Button";
import StatusSquare from "ui/StatusCard";
import { KeyboardArrowDown as KeyboardArrowDownIcon } from "@mui/icons-material";
import { useRouter } from "next/router";
// import { toast } from "react-toastify"; // i think there is something similar in MUI Backdrop
import React, { useRef } from "react";

const InvoiceDetails = (props: { data: any }) => {
  const router = useRouter();
  const { data } = props;
  const modalRef = useRef(null);

  const goBack = () => router.push("/");

  // update invoice status in database
  const updateStatus = async (invoiceId: any) => {
    const res = await fetch(`/api/invoices/${invoiceId}`, {
      method: "PUT",
    });
    const data = await res.json();
  };

  // delete invoice from the database
  const deleteInvoice = async (invoiceId: any) => {
    try {
      const res = await fetch(`/api/invoices/${invoiceId}`, {
        method: "DELETE",
      });

      const data = await res.json();
      toast.success(data.message);
      router.push("/");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };
};

export default function invoiceDetails() {
  return (
    <Container maxWidth="md">
      <Grid direction="row">
        <Button
          // onClick={goBack}
          sx={{}}
          startIcon={
            <KeyboardArrowDownIcon
              color="primary"
              sx={{
                transform: "rotate(90deg)",
              }}
            />
          }
        >
          Go Back
        </Button>
      </Grid>
      {/* ======= invoice details header ========== */}
      <Stack spacing={2}>
        <Grid
          container
          item
          justifyContent="space-between"
          borderRadius={2}
          padding="1.6rem"
          sx={{ backgroundColor: "#1E2139" }}
        >
          <Grid container item md={4} alignItems="center">
            <Grid>
              <Typography variant="body1">Status</Typography>
            </Grid>
            <Grid>
              <StatusSquare
                sx={{ color: "#FF8F00", backgorundColor: "#FF8F00" }}
              >
                Pending
              </StatusSquare>
            </Grid>
          </Grid>

          <Grid item padding={1} alignItems="center" alignContent="center">
            <Stack
              spacing={2}
              direction="row"
              alignContent="center"
              alignItems="center"
            >
              <Button variant="contained">Edit</Button>
              <Button variant="contained">Delete</Button>
              <Button variant="contained">Mark as Paid</Button>
            </Stack>
          </Grid>
        </Grid>

        {/* ========= confirm deletion modal start ========== We can apply Modal component from MUI*/}
        <Grid container item>
          <Grid item>
            <Typography variant="h3">Confirm Deletion</Typography>
            <Typography>
              Are you sure you want to delete invoice # - logic - ? This action
              can not be undone.
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained">Cancel</Button>
            <Button variant="contained">Confirm</Button>
          </Grid>
        </Grid>

        {/* ======== confirm deletion modal end */}

        {/* ========= invoice details =========== */}

        <Grid
          container
          item
          borderRadius={2}
          padding="1.6rem"
          sx={{ backgroundColor: "#1E2139" }}
        >
          <Grid container item paddingBottom={2} justifyContent="space-between">
            <Grid item>
              <Typography variant="h3">Invoice number</Typography>
              <Typography variant="body1">Concept</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">Street</Typography>
              <Typography variant="body2">City</Typography>
              <Typography variant="body2">Postal Code</Typography>
              <Typography variant="body2">Country</Typography>
            </Grid>
          </Grid>

          <Grid container item spacing={2}>
            {/* =========== details box 2 =========== */}
            <Grid item md={4}>
              <Typography variant="body1" paddingBottom={0.5}>
                Invoice Date
              </Typography>
              <Typography variant="h3" paddingBottom={1}>
                Invoice Date
              </Typography>
              <Typography variant="body1" paddingBottom={0.5}>
                Payment Due
              </Typography>
              <Typography variant="h3" paddingBottom={1}>
                Payment Due
              </Typography>
            </Grid>
            {/* ======= invoice client address ========== */}
            <Grid item md={4}>
              <Typography variant="body1" paddingBottom={0.5}>
                Bill To
              </Typography>
              <Typography variant="h3" paddingBottom={1}>
                Client Name
              </Typography>
              <Typography variant="body1">Client Street</Typography>
              <Typography variant="body1">Client City</Typography>
              <Typography variant="body1">Client Postal Code</Typography>
              <Typography variant="body1">Client Country</Typography>
            </Grid>
            <Grid item md={4}>
              <Typography variant="body1">Sent to</Typography>
              <Typography variant="h3">Client e-mail</Typography>
            </Grid>
            <Grid
              container
              item
              borderRadius={2}
              margin={2}
              padding={2}
              sx={{ backgroundColor: "#252945" }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Item Name</TableCell>
                    <TableCell align="center">Qty.</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center">Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="center">Item Name</TableCell>
                    <TableCell align="center">Qty.</TableCell>
                    <TableCell align="center">Price</TableCell>
                    <TableCell align="center">Total</TableCell>
                  </TableRow>
                </TableBody>
                <TableFooter>
                  <TableRow sx={{ backgroundColor: "#0C0E16" }}>
                    <TableCell align="center">Amount Due</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell align="center">$$$$$$$</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
