"use client";
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Button } from "ui/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import StatusSquare from "../../../packages/ui/StatusCard";
import { InvoiceCard } from "../../../packages/ui/InvoiceCard";
import { InvoiceCreation } from "../../../packages/ui/InvoiceCreation";

// Resultado similar a lo que daria la API al consultar un Invoice
const invoiceExample = [
  {
    invoiceId: "INV-00004",
    clientName: "Erick Huie",
    ownerEmail: "eh@example.com",
    status: "paid",
    description: "Final Feliz",
    paymentTerms: 30,
    createdAt: "20 Apr 2023",
    updatedAt: "21 Sep 2023",
    totalAmount: "3500",
  },
  {
    invoiceId: "INV-00003",
    clientName: "Marco Sotelo",
    ownerEmail: "Ms@example.com",
    status: "paid",
    description: "Cariniosas web",
    paymentTerms: 30,
    createdAt: "13 Apr 2023",
    updatedAt: "15 Sep 2023",
    totalAmount: "1700",
  },
  {
    invoiceId: "INV-00002",
    clientName: "John Smith",
    ownerEmail: "mio@example.com",
    status: "paid",
    description: "Chat app",
    paymentTerms: 30,
    createdAt: "22 Apr 2023",
    updatedAt: "23 Sep 2023",
    totalAmount: "2500",
  },
  {
    invoiceId: "INV-00001",
    clientName: "John Doe",
    ownerEmail: "owner@example.com",
    status: "pending",
    description: "Web design and hosting services",
    paymentTerms: 30,
    createdAt: "21 Aug 2021",
    updatedAt: "20 Sep 2021",
    totalAmount: "1500",
  },
];

export default function invoicesList() {
  // const router = useRouter();
  // const { data } = props;
  // const navigatePage = () => router.push("/add-new");
  const apiMethod = async () => {
    const resToken = await fetch("api/getAccesToken");
    const { accessToken } = await resToken.json();

    const res = await fetch("http://localhost:8000/api/v1/invoices", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  };

  return (
    <Container maxWidth="desktop" sx={{ width: "730px" }}>
      {/* ============= header ================== */}
      <InvoiceCreation />
      {/* ======= invoice item =========== */}
      <Box>
        {invoiceExample.map((invoice) => (
          <InvoiceCard key={invoice.invoiceId} invoice={invoice} />
        ))}
      </Box>
    </Container>
  );
}
