import {Button, IconButton, Paper, Stack, Typography } from "@mui/material";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { StatusButton } from "./StatusButton";

export const InvoiceCard = ({...rest}) => (
  <Paper {...rest}>
    <Stack
    direction={"row"}
    justifyContent={"space-between"}
    alignItems={"center"}
    >
      <Typography variant="h4">(Invoice Number)</Typography>
      <Typography variant="body1">(Invoice Date)</Typography>
      <Typography  variant="body1">(Invoice Owner)</Typography>
      <Typography  variant="h3">(Total Amount)</Typography>
      
      <IconButton>
      <KeyboardArrowRightIcon />
      </IconButton>
    </Stack>
  

  </Paper>
)