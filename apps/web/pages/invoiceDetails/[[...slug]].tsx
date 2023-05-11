"use client";
import {
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
import { Button } from "../../../../packages/ui/Button";
import StatusSquare from "../../../../packages/ui/StatusCard";
import { KeyboardArrowDown as KeyboardArrowDownIcon } from "@mui/icons-material";
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { getSession } from "@auth0/nextjs-auth0";
import { getToken, AccessTokenResult } from "../../pages/api/token";

export enum InvoiceStatus {
  DRAFT = "draft",
  PENDING = "pending",
  PAID = "paid",
}

export interface Invoice {
  invoiceId: string;
  ownerId: string;
  status: InvoiceStatus;
  description: string;
  billFrom: BillFrom;
  billTo: BillTo;
  date: string;
  //paymentTerms: PaymentTermsOptions;
  itemList: Item[];
  formattedDate: string;
  createdAt: string;
}

export interface BillFrom {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

export interface BillTo {
  clientName: string;
  clientEmail: string;
  street: string;
  city: string;
  postCode: string;
  country: string;
}

interface Props {
  invoice: Invoice;
}

function calculateTotal(quantity: number, price: number): number {
  return quantity * price;
}

function formatDate(dateString: string | number | Date) {
  const date = new Date(dateString).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return date.replace(/\b\w/g, (l) => l.toUpperCase());
}

export default function InvoiceDetails({ invoice }: Props) {
  const goBack = () => {
    router.back();
  };

  const formattedDate = formatDate(invoice.createdAt);
  const totalAmount = invoice.itemList.reduce(
    (accumulator, item) => accumulator + item.quantity * item.price,
    0
  );

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
    const resToken = await fetch("http://localhost:3000/api/getAccessToken");
    const { accessToken } = await resToken.json();
    try {
      const res = await fetch(
        `http://localhost:8000/api/v1/invoices/${invoiceId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(res);

      if (!res.ok) {
        throw new Error(`Error deleting invoice: ${res.statusText}`);
      }

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

  // change status of the invoice to paid
  const markInvoiceAsPaid = async (invoiceId: string) => {
    const resToken = await fetch("http://localhost:3000/api/getAccessToken");
    const { accessToken } = await resToken.json();
    try {
      const res = await fetch(
        `http://localhost:8000/api/v1/invoices/${invoiceId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ status: InvoiceStatus.PAID }),
        }
      );

      if (res.ok) {
        setSnackbarMessage("Invoice marked as paid");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        router.replace(router.asPath); // Refresca la página para mostrar el estado actualizado
      } else {
        throw new Error("Error marking invoice as paid");
      }
    } catch (error) {
      setSnackbarMessage("Something went wrong!");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleEditInvoice = (invoiceId: string) => {

    setShowEditForm(true);


  const handleSnackbarClose = (event: any, reason: string) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <Container sx={{ maxWidth: "730px" }}>
      <Grid container direction="row">
        <Button
          onClick={goBack}
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
          padding="1rem"
          sx={{ backgroundColor: "background.paper" }}
        >
          <Grid container item tablet={4} alignItems="center">
            <Grid>
              <Typography variant="body1" marginX={2} paddingTop={1}>
                Status
              </Typography>
            </Grid>
            <Grid>
              <StatusSquare>{invoice.status}</StatusSquare>
            </Grid>
          </Grid>

          <Grid item alignItems="center" alignContent="center">
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
                onClick={() => deleteInvoice(invoice.invoiceId)}
              >
                Delete
              </Button>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "24px",
                  ":hover": { bgcolor: "primary.light" },
                }}
                onClick={() => markInvoiceAsPaid(invoice.invoiceId)}
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
                {formattedDate}
              </Typography>
            </Grid>
            {/* ======= invoice client address ========== */}
            <Grid item tablet={4}>
              <Typography variant="body1" paddingBottom={0.5}>
                Bill To
              </Typography>
              <Typography variant="h3" paddingBottom={1}>
                {invoice.billTo.clientName}
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
                    <TableCell align="center" sx={{ borderBottom: "none" }}>
                      Item Name
                    </TableCell>
                    <TableCell align="center" sx={{ borderBottom: "none" }}>
                      Qty.
                    </TableCell>
                    <TableCell align="center" sx={{ borderBottom: "none" }}>
                      Price
                    </TableCell>
                    <TableCell align="center" sx={{ borderBottom: "none" }}>
                      Total
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {invoice.itemList.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell align="center" sx={{ borderBottom: "none" }}>
                        {item.name}
                      </TableCell>
                      <TableCell align="center" sx={{ borderBottom: "none" }}>
                        {item.quantity}
                      </TableCell>
                      <TableCell align="center" sx={{ borderBottom: "none" }}>
                        {item.price}
                      </TableCell>
                      <TableCell align="center" sx={{ borderBottom: "none" }}>
                        {item.quantity * item.price}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow sx={{ backgroundColor: "secondary.dark" }}>
                    <TableCell align="center" sx={{ borderBottom: "none" }}>
                      Amount Due
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none" }}></TableCell>
                    <TableCell sx={{ borderBottom: "none" }}></TableCell>
                    <TableCell align="center" sx={{ borderBottom: "none" }}>
                      {totalAmount}
                    </TableCell>
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
  const invoiceId = query.slug[0];

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
    console.error("Error fetching invoice details:", response.statusText);
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
