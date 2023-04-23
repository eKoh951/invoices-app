import { IconButton, Paper, Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import StatusSquare from "./StatusCard";

interface InvoiceCardProps {
  invoice: any;
}

export const InvoiceCard = (props: InvoiceCardProps, { ...rest }) => {
  const { invoice } = props;

  return (
    <Paper {...rest}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        spacing={3}
        padding={2}
      >
        <Typography variant="h4">{invoice.invoiceId}</Typography>
        <Typography variant="body1">{invoice.createdAt}</Typography>
        <Typography variant="body1">{invoice.clientName}</Typography>
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
