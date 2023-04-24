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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "../../../packages/ui/Button";
import StatusSquare from "ui/StatusCard";
import { KeyboardArrowDown as KeyboardArrowDownIcon } from "@mui/icons-material";
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { GetServerSideProps } from "next";
import { getSession } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { getToken, AccessTokenResult } from "../pages/api/getAccessToken";

interface Invoice {
  invoiceId: string;
  createdAt: string;
  clientName: string;
  totalAmount: number;
  status: string;
  description: string;
  billFrom: string;
  billTo: string;
  street: string;
  city: string;
  country: string;
  postCode: string;
  formattedDate: any;
}

interface Props {
  invoice: Invoice;
}

function formatDate(dateString: string | number | Date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(dateString);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${months[monthIndex]} ${year}`;
}

export default function invoiceDetails({ invoice }: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // delete invoice from the database
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const deleteInvoice = async (invoiceId: string) => {
    const resToken = await fetch("api/getAccessToken");
    const { accessToken } = await resToken.json();
    try {
      const res = await fetch(
        `https://localhost:8000/api/v1/invoices/${invoiceId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const data = await res.json();
      setSnackbarMessage(data.message);
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      router.push("/");
    } catch (error) {
      setSnackbarMessage("Something went wrong!");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };
  const handleEditInvoice = async (invoiceId: string) => {
    const resToken = await fetch("api/getAccessToken");
    const { accessToken } = await resToken.json();
    const res = await fetch(
      `https://localhost:8000/api/v1/invoices/${invoiceId}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    //router.push(`/edit-invoice/${invoiceId}`);
  };

  const handleSnackbarClose = (event: any, reason: string) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <Container sx={{ maxWidth: "730px" }}>
      <Grid direction="row">
        <Button
          // onClick={goBack}
          //sx={{color: theme.palette.mode === 'dark' ? 'white' : 'black'}}
          sx={{ color: "white", ":hover": { color: "secondary.light" } }}
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
          sx={{ backgroundColor: "background.paper" }}
        >
          <Grid container item tablet={4} alignItems="center">
            <Grid>
              <Typography variant="body1">Status</Typography>
            </Grid>
            <Grid>
              <StatusSquare
                sx={{ color: "warning.main", backgroundColor: "warning.dark" }}
              >
                {invoice.status}
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
              <Button
                variant="contained"
                onClick={() => handleEditInvoice(invoice.invoiceId)}
                sx={{
                  color: "draft.main",
                  backgroundColor: "primary.dark",
                  borderRadius: "24px",
                  ":hover": { bgcolor: "white", color: "secondary.main" },
                }}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                sx={{
                  color: "white",
                  backgroundColor: "error.main",
                  borderRadius: "24px",
                  ":hover": { bgcolor: "error.light" },
                }}
                onClick={handleOpen}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "24px",
                  ":hover": { bgcolor: "primary.light" },
                }}
              >
                Mark as Paid
              </Button>
            </Stack>
            {/* ========= confirm deletion modal start ==========*/}
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <Grid sx={{ width: "30em", height: "16 em" }}>
                <DialogTitle id="alert-dialog-title">
                  <Typography variant="h2">Confirm Deletion</Typography>
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    <Typography variant="body1">
                      Are you sure you want to delete invoice #
                      {invoice.invoiceId}? This action cannot be undone.
                    </Typography>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={handleClose}
                    variant="contained"
                    sx={{
                      color: "draft.main",
                      backgroundColor: "primary.dark",
                      borderRadius: "24px",
                      ":hover": { bgcolor: "white", color: "secondary.main" },
                      marginBottom: "1em",
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      deleteInvoice(invoice.invoiceId);
                      handleClose();
                    }}
                    variant="contained"
                    sx={{
                      color: "white",
                      backgroundColor: "error.main",
                      borderRadius: "24px",
                      ":hover": { bgcolor: "error.light" },
                      marginBottom: "1em",
                    }}
                    autoFocus
                  >
                    Delete
                  </Button>
                </DialogActions>
              </Grid>
            </Dialog>
          </Grid>
        </Grid>
        {/* ======== confirm deletion modal end */}

        {/* ========= invoice details =========== */}

        <Grid
          container
          item
          borderRadius={2}
          padding="1.6rem"
          sx={{ backgroundColor: "background.paper" }}
        >
          <Grid container item paddingBottom={2} justifyContent="space-between">
            <Grid item>
              <Typography variant="h3">{invoice.invoiceId}</Typography>
              <Typography variant="body1">{invoice.description}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">{invoice.billFrom.street}</Typography>
              <Typography variant="body2">{invoice.billFrom.city}</Typography>
              <Typography variant="body2">
                {invoice.billFrom.postCode}
              </Typography>
              <Typography variant="body2">
                {invoice.billFrom.country}
              </Typography>
            </Grid>
          </Grid>

          <Grid container item spacing={2}>
            {/* =========== details box 2 =========== */}
            <Grid item tablet={4}>
              <Typography variant="body1" paddingBottom={0.5}>
                Invoice Date
              </Typography>
              <Typography variant="h3" paddingBottom={1}>
                {formattedDate}
              </Typography>
              <Typography variant="body1" paddingBottom={0.5}>
                Payment Due
              </Typography>
              <Typography variant="h3" paddingBottom={1}>
                {invoice.updatedAt}
              </Typography>
            </Grid>
            {/* ======= invoice client address ========== */}
            <Grid item tablet={4}>
              <Typography variant="body1" paddingBottom={0.5}>
                Bill To
              </Typography>
              <Typography variant="h3" paddingBottom={1}>
                {billTo.clientName}
              </Typography>
              <Typography variant="body1">{invoice.billTo.street}</Typography>
              <Typography variant="body1">{invoice.billTo.city}</Typography>
              <Typography variant="body1">{invoice.billTo.postCode}</Typography>
              <Typography variant="body1">{invoice.billTo.country}</Typography>
            </Grid>
            <Grid item tablet={4}>
              <Typography variant="body1">Sent to</Typography>
              <Typography variant="h3">{invoice.billTo.clientEmail}</Typography>
            </Grid>
            <Grid
              container
              item
              borderRadius={2}
              margin={2}
              padding={2}
              sx={{ backgroundColor: "primary.dark" }}
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
                    <TableCell align="center">
                      {invoice.itemList[0].name}
                    </TableCell>
                    <TableCell align="center">
                      {invoice.itemList[0].quantity}
                    </TableCell>
                    <TableCell align="center">
                      {invoice.itemList[0].price}
                    </TableCell>
                    <TableCell align="center">
                      {invoice.itemList[0].price}
                    </TableCell>
                    {/* check if the op is here or in the backEnd */}
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">
                      {invoice.itemList[1].name}
                    </TableCell>
                    <TableCell align="center">
                      {invoice.itemList[1].quantity}
                    </TableCell>
                    <TableCell align="center">
                      {invoice.itemList[1].price}
                    </TableCell>
                    <TableCell align="center">
                      {invoice.itemList[1].price}
                    </TableCell>
                    {/* check if the op is here or in the backEnd */}
                  </TableRow>
                </TableBody>
                <TableFooter>
                  <TableRow sx={{ backgroundColor: "secondary.dark" }}>
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
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={"success"}
          variant="filled"
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res, query } = context;
  const { invoiceId } = query;

  // Comprueba si el usuario está autenticado
  const session = await getSession(req, res);
  if (!session || !session.user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  let accessTokenResult: AccessTokenResult;
  try {
    accessTokenResult = await getToken(req, res);
  } catch (error) {
    console.error("Error getting access token:", error);
    return {
      notFound: true,
    };
  }

  const response = await fetch(
    `http://localhost:8000/api/v1/invoices/${invoiceId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessTokenResult.accessToken}`,
      },
    }
  );

  if (!response.ok) {
    console.error("Error fetching invoice:", response.statusText);
    return {
      notFound: true,
    };
  }
  const invoice = await response.json();

  return {
    props: {
      invoice,
    },
  };
};
