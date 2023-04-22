import { IconButton, Paper, Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import StatusSquare from "./StatusCard";

export const InvoiceCard = ({ ...rest }) => (
  <Paper {...rest}>
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      spacing={3}
      padding={2}
    >
      <Typography variant="h4">(Invoice Number)</Typography>
      <Typography variant="body1">(Invoice Date)</Typography>
      <Typography variant="body1">(Invoice Owner)</Typography>
      <Typography variant="h3">(Total Amount)</Typography>
      <StatusSquare sx={{ color: "warning.main" }}>
        (invoiceExample.status)
      </StatusSquare>
      <IconButton>
        <KeyboardArrowRightIcon sx={{ color: "primary.main" }} />
      </IconButton>
    </Stack>
  </Paper>
);
