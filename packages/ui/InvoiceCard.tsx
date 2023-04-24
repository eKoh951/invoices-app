import { IconButton, Paper, Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import StatusSquare from "./StatusCard";

interface InvoiceCardProps {
  invoice: any;
}

function formatDate(dateString: string | number | Date) {
  const date = new Date(dateString).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return date.replace(/\b\w/g, (l) => l.toUpperCase());
}

export const InvoiceCard = (props: InvoiceCardProps, { ...rest }) => {
  const { invoice } = props;
  const formattedDate = formatDate(invoice.createdAt);

  return (
    <Paper {...rest}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        spacing={3}
        padding={2}
        marginBottom={2}
      >
        <Typography variant="h4">{invoice.invoiceId}</Typography>
        <Typography variant="body1">{formattedDate}</Typography>
        <Typography variant="body1">{invoice.billTo.clientName}</Typography>
        <Typography variant="h3">{invoice.totalAmount}</Typography>
        <StatusSquare sx={{ color: "warning.main" }}>
          {invoice.status}
        </StatusSquare>
        <IconButton>
          <KeyboardArrowRightIcon sx={{ color: "primary.main" }} />
        </IconButton>
      </Stack>
    </Paper>
  );
};
