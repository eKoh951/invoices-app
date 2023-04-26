import React from "react";
import { Button } from "ui";
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';


export default {
  title: "Example/Buttons",
  component: Button,
  argTypes: {
    children: { control: "text" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    variant: {
      control: { type: "select", options: ["filled", "outline", "text"] },
    },
    color: {
      control: {
        type: "select",
        options: [
          "mostlyBlack",
          "white",
          "darkGreyishBlue",
          "lightGreyishBlueHover",
        ],    
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const newInvoiceButton = Template.bind({});
newInvoiceButton.args = {
  children: "New Invoice",
  size: "large",
  sx: {
    backgroundColor : "primary.main",
    color: "error.contrastText"
  },
  startIcon: <AddCircleIcon />
};

export const paidButton = Template.bind({});
paidButton.args = {
  children: "Mark as Paid",
  size: "large",
  sx: {
    backgroundColor : "primary.light",
    color: "error.contrastText"
  },
};

export const deleteButton = Template.bind({});
deleteButton.args = {
  children: "Delete",
  size: "large",
  sx: {
    backgroundColor : "error.main",
    color: "error.contrastText"
  },
};

export const editButton = Template.bind({});
editButton.args = {
  children: "Edit",
  size: "large",
  sx: {
    backgroundColor : "secondary.contrastText",
    color: "secondary.main"
  },
};

export const draftButton = Template.bind({});
draftButton.args = {
  children: "Safe as Draft",
  size: "large",
  sx: {
    backgroundColor : "primary.light",
    color: "error.contrastText"
  },
};

export const newItemButton = Template.bind({});
newItemButton.args = {
  children: "Add New Item",
  size: "large",
  sx: {
    backgroundColor : "primary.contrastText",
    color: "draft.main"
  },
  startIcon: <AddIcon />
};
