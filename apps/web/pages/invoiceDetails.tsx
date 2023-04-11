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
// import { toast } from "react-toastify"; // i think there is something similar in MUI Modal
import React, { useRef } from "react";
import { useTheme } from "@emotion/react";

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
  return (
    <Container maxWidth="tablet">
      <Grid direction="row">
        <Button
          // onClick={goBack}
          //sx={{color: theme.palette.mode === 'dark' ? 'white' : 'black'}}
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
          <Grid container item tablet={4} alignItems="center">
            <Grid>
              <Typography variant="body1">Status</Typography>
            </Grid>
            <Grid>
              <StatusSquare
                sx={{ color: "warning.main", backgroundColor: "#FF8F00" }}
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
