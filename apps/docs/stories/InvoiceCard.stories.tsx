import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import StatusSquare from "ui/StatusCard";
import { IconButton, Paper, Stack, Typography } from "@mui/material";

type Props = {
  components: React.ElementType[];
  componentsArgs: Record<string, any>[];
  paperargs: Record<string, any>;
};

const Template: React.FC<Props> = ({
  components,
  componentsArgs,
  paperargs,
}) => (
  <Paper {...paperargs}>
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingX={"30px"}
      height={"72px"}
    >
      {components.map((Component, index) => (
        <Component key={index} {...componentsArgs[index]} />
      ))}
    </Stack>
  </Paper>
);

export default {
  title: "Invoice Card",
  component: Paper,
};

export const Invoice_Card = Template.bind({});
Invoice_Card.args = {
  components: [
    Typography,
    Typography,
    Typography,
    Typography,
    StatusSquare,
    IconButton,
  ],
  componentsArgs: [
    { variant: "h4", children: "Invoice Number" },
    {
      variant: "body1",
      children: "Invoice Date",
      color: "edit.contrastText",
    },
    {
      variant: "body1",
      children: "Invoice Owner",
      color: "edit.contrastText",
    },
    { variant: "h3", children: "Total Amount" },
    {
      children: "Paid",
      color: "status.paid.main",
      backgroundColor: "status.paid.secondary",
    },
    { children: <KeyboardArrowRightIcon sx={{ color: "purple.main" }} /> },
  ],
  paperargs: {
    elevation: 0,
    sx: {
      maxWidth: "730px",
      backgroundColor: "componentBackground.secondary",
    },
  },
};
