import { Box, Container } from "@mui/material";
import { InvoiceCard } from "../../../packages/ui/InvoiceCard";
import { InvoiceCreation } from "../../../packages/ui/InvoiceCreation";
import { getSession } from "@auth0/nextjs-auth0";
import { getToken } from "../lib/getAccessToken"; // Importa la función aquí desde el nuevo archivo

interface Invoice {
  invoiceId: string;
  // Agrega aquí las demás propiedades de la factura que necesites
}

export default function invoicesList({invoices}) {

  
  return (
    <Container maxWidth="desktop" sx={{ width: "730px" }}>
      {/* ============= header ================== */}
      <InvoiceCreation />
      {/* ======= invoice item =========== */}
      <Box>
        {invoices.map((invoice) => (
          <InvoiceCard key={invoice.invoiceId} invoice={invoice} />
        ))}
      </Box>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const { req, res } = context;

  // Comprueba si el usuario está autenticado
  const session = getSession(req, res);
  if (!session || !session.user) {
    return {
      redirect: {
        destination: '/login', // Redirige al usuario a la página de inicio de sesión si no está autenticado
        permanent: false,
      },
    };
  }

  let accessToken;
  try {
    accessToken = await getToken(req, res);
  } catch (error) {
    console.error('Error al obtener el token de acceso:', error);
    return {
      notFound: true,
    };
  }

  const response = await fetch("http://localhost:8000/api/v1/invoices", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const invoices = await response.json()

  return {
    props: {
      invoices,
    },
  }
}