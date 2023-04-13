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
import { useState } from "react";

const billFromExample = {
  street: "123 Main St",
  city: "San Francisco",
  postCode: "94105",
  country: "USA",
};

const billToExample = {
  clientName: "John Doe",
  clientEmail: "johndoe@example.com",
  street: "789 Market St",
  city: "New York",
  postCode: "10001",
  country: "USA",
};

const itemListExample = [
  {
    name: "Web Design",
    quantity: 1,
    price: 1500,
  },
  {
    name: "Hosting",
    quantity: 1,
    price: 100,
  },
];

// Resultado similar a lo que daria la API al consultar un Invoice
const invoiceExample = {
  invoiceId: "INV-00001",
  ownerEmail: "owner@example.com",
  status: "pending",
  description: "Web design and hosting services",
  billFrom: billFromExample,
  billTo: billToExample,
  paymentTerms: 30,
  itemList: itemListExample,
  createdAt: "21 Aug 2021",
  updatedAt: "20 Sep 2021",
};

// Ejemplo de los datos que se enviarian a la API al crear un Invoice
const createInvoiceExample = {
  status: "pending",
  description: "Web design and hosting services",
  billFrom: billFromExample,
  billTo: billToExample,
  paymentTerms: 30,
  itemList: itemListExample,
};

const updateInvoiceExample = {
  status: "paid",
  description: "Web design and hosting services - Updated",
};

export default function invoiceDetails() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="tablet">
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
                {invoiceExample.status}
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
                sx={{
                  color: "draft.main",
                  backgroundColor: "#252945",
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
            {/* ========= confirm deletion modal start ========== We can apply Modal component from MUI*/}
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                <Typography variant="h2">Confirm Deletion</Typography>
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <Typography variant="body1">
                    Are you sure you want to delete invoice #
                    {invoiceExample.invoiceId}? This action cannot be undone.
                  </Typography>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleClose}
                  variant="contained"
                  sx={{
                    color: "draft.main",
                    backgroundColor: "#252945",
                    borderRadius: "24px",
                    ":hover": { bgcolor: "white", color: "secondary.main" },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  onClick={() => {
                    // Llama a la función de eliminar factura aquí
                    handleClose();
                  }}
                  variant="contained"
                  sx={{
                    color: "white",
                    backgroundColor: "error.main",
                    borderRadius: "24px",
                    ":hover": { bgcolor: "error.light" },
                  }}
                  autoFocus
                >
                  Delete
                </Button>
              </DialogActions>
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
          sx={{ backgroundColor: "#1E2139" }}
        >
          <Grid container item paddingBottom={2} justifyContent="space-between">
            <Grid item>
              <Typography variant="h3">{invoiceExample.invoiceId}</Typography>
              <Typography variant="body1">
                {invoiceExample.description}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">{billFromExample.street}</Typography>
              <Typography variant="body2">{billFromExample.city}</Typography>
              <Typography variant="body2">
                {billFromExample.postCode}
              </Typography>
              <Typography variant="body2">{billFromExample.country}</Typography>
            </Grid>
          </Grid>

          <Grid container item spacing={2}>
            {/* =========== details box 2 =========== */}
            <Grid item tablet={4}>
              <Typography variant="body1" paddingBottom={0.5}>
                Invoice Date
              </Typography>
              <Typography variant="h3" paddingBottom={1}>
                {invoiceExample.createdAt}
              </Typography>
              <Typography variant="body1" paddingBottom={0.5}>
                Payment Due
              </Typography>
              <Typography variant="h3" paddingBottom={1}>
                {invoiceExample.updatedAt}
              </Typography>
            </Grid>
            {/* ======= invoice client address ========== */}
            <Grid item tablet={4}>
              <Typography variant="body1" paddingBottom={0.5}>
                Bill To
              </Typography>
              <Typography variant="h3" paddingBottom={1}>
                {billToExample.clientName}
              </Typography>
              <Typography variant="body1">{billToExample.street}</Typography>
              <Typography variant="body1">{billToExample.city}</Typography>
              <Typography variant="body1">{billToExample.postCode}</Typography>
              <Typography variant="body1">{billToExample.country}</Typography>
            </Grid>
            <Grid item tablet={4}>
              <Typography variant="body1">Sent to</Typography>
              <Typography variant="h3">{billToExample.clientEmail}</Typography>
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
                    <TableCell align="center">
                      {itemListExample[0].name}
                    </TableCell>
                    <TableCell align="center">
                      {itemListExample[0].quantity}
                    </TableCell>
                    <TableCell align="center">
                      {itemListExample[0].price}
                    </TableCell>
                    <TableCell align="center">
                      {itemListExample[0].price}
                    </TableCell>
                    {/* check if the op is here or in the backEnd */}
                  </TableRow>
                  <TableRow>
                    <TableCell align="center">
                      {itemListExample[1].name}
                    </TableCell>
                    <TableCell align="center">
                      {itemListExample[1].quantity}
                    </TableCell>
                    <TableCell align="center">
                      {itemListExample[1].price}
                    </TableCell>
                    <TableCell align="center">
                      {itemListExample[1].price}
                    </TableCell>
                    {/* check if the op is here or in the backEnd */}
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
