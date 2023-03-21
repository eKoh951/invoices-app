import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button, IconButton, Paper, Stack, Typography } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

type Props = {
  components: React.ElementType[],
  componentsArgs: Record<string, any>[],
  paperargs: Record<string, any>,
}

const Template: React.FC<Props> = ({ components, componentsArgs, paperargs }) => (
  <Paper {...paperargs}>
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingX={"32px"}
    >
      {components.map((Component, index) => (
        <Component key={index} {...componentsArgs[index]} />
      ))}
    </Stack>
  </Paper>
);

export default {
  title: "Invoice Card",
  component: Paper
};

export const Invoice_Card = Template.bind({});
Invoice_Card.args = {
  components: [
    Typography,
    Typography,
    Typography,
    Typography,
    Button,
    IconButton,
  ],
  componentsArgs: [
    { variant: "h4", children: "Invoice Number"},
    { variant: "body1", children: "Invoice Date" },
    { variant: "body1", children: "Invoice Owner" },
    { variant: "h3", children: "Total Amount" },
    { children: "Pending" ,
    sx : {
      color: "status.pending",
      backgroundColor: "#FF9797"
    }
  },
    { children: <KeyboardArrowRightIcon /> },
  ],
  paperargs: {
    sx: {
      maxWidth: "730px",
    },
  },
};