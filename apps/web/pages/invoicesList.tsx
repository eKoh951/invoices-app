"use client";
import { IconButton, Stack, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Button } from "ui/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { InvoiceCard } from "ui/InvoiceCard";
import { useRouter } from "next/router";
import { MongoClient } from "mongodb";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import StatusSquare from "../../../packages/ui/StatusCard";

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

export default function invoicesList() {
  // const router = useRouter();
  // const { data } = props;

  // const navigatePage = () => router.push("/add-new");

  return (
    <Container>
      <Grid container justifyContent="space-between" marginBottom={3}>
        <Grid>
          <Typography variant="h1" marginBottom={1}>
            Invoices
          </Typography>
          <Typography variant="body1">
            There are total (data.length) invoices
          </Typography>
        </Grid>
        <Grid direction="row" alignItems="center">
          <Grid>
            <Stack
              direction="row"
              alignItems="center"
              alignContent="center"
              spacing={2}
            >
              <Typography>Filter</Typography>
              <Button
                variant="contained"
                startIcon={<AddCircleIcon />}
                sx={{ color: "white", borderRadius: "14px" }}
                // onClick={navigatePage}
              >
                New Invoice
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      {/* ======= invoice item =========== */}
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        marginBottom={2}
        sx={{ backgroundColor: "background.paper", borderRadius: "8px" }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          spacing={3}
          padding={2}
        >
          <Typography variant="h4">{invoiceExample.invoiceId}</Typography>
          <Typography variant="body1">{invoiceExample.updatedAt}</Typography>
          <Typography variant="body1">{billToExample.clientName}</Typography>
          <Typography variant="h3">(Total Amount)</Typography>
          <StatusSquare sx={{ color: "white" }} />
          <IconButton>
            <KeyboardArrowRightIcon />
          </IconButton>
        </Stack>
      </Grid>
      <InvoiceCard />
    </Container>
  );
}
