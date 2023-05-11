import { Box, Container } from "@mui/material";
import { InvoiceCard } from "../../../packages/ui/InvoiceCard";
import { InvoiceCreation } from "../../../packages/ui/InvoiceCreation";
import { getSession } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";
import { getToken, AccessTokenResult } from "../pages/api/token"; // Importa getToken desde token.ts
import Link from "next/link";
import { InvoiceStatus } from "./invoiceDetails/[[...slug]]";
import { useState } from "react";

interface Invoice {
  invoiceId: string;
  createdAt: string;
  clientName: string;
  totalAmount: number;
  status: InvoiceStatus;
  //status: string;
}
interface Props {
  invoices: Invoice[];
}
//wsdfghjkl;'fghjkl;'
export default function invoicesList({ invoices }: Props) {
  const [filteredInvoices, setFilteredInvoices] = useState(invoices);

  const onFilterChange = (selectedStatuses: string[]) => {
    if (selectedStatuses.length === 0) {
      setFilteredInvoices(invoices);
    } else {
      const newFilteredInvoices = invoices.filter((invoice) =>
        selectedStatuses.includes(invoice.status)
      );
      setFilteredInvoices(newFilteredInvoices);
    }
  };

  const pendingInvoices = invoices.filter(
    (invoice) => invoice.status === InvoiceStatus.PENDING
  );

  return (
    <Container maxWidth="desktop" sx={{ width: "730px" }}>
      {/* ============= header ==================  */}
      <InvoiceCreation
        pendingInvoiceCount={pendingInvoices.length}
        onFilterChange={onFilterChange}
      />
      {/* ======= invoice item ===========  */}
      <Box>
        {filteredInvoices.map((invoice) => (
          <Link
            style={{ textDecoration: "none" }}
            href={`/invoiceDetails/${invoice.invoiceId}`}
            key={invoice.invoiceId}
          >
            <InvoiceCard key={invoice.invoiceId} invoice={invoice} />
          </Link>
        ))}
      </Box>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, res } = context;

  // Comprueba si el usuario está autenticado
  const session = await getSession(req, res);
  if (!session || !session.user) {
    return {
      redirect: {
        destination: "/login", // Redirige al usuario a la página de inicio de sesión si no está autenticado
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

  const response = await fetch("http://localhost:8000/api/v1/invoices", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessTokenResult.accessToken}`,
    },
  });

  if (!response.ok) {
    console.error("Error fetching invoices:", response.statusText);
    return {
      notFound: true,
    };
  }
  const invoices = await response.json();

  return {
    props: {
      invoices,
    },
  };
};
