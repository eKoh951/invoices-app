import React from "react";
import { Button } from "ui";
import AddIcon from '@mui/icons-material/Add';
import AddCircleIcon from '@mui/icons-material/AddCircle';


export default {
  title: "Actionable/Buttons",
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

export const Playground = Template.bind({});
Playground.args = {
  label: "Click me!",
  color: "softBlue",
  size: "large",
  fontWeightBold: "700",
  textTransform: "none",
  sx: { borderRadius: "42px" },
};

export const newInvoiceButton = Template.bind({});
newInvoiceButton.args = {
  children: "New Invoice",
  color: "softBlue",
  size: "large",
  startIcon: <AddCircleIcon />
};

export const paidButton = Template.bind({});
paidButton.args = {
  children: "Mark as Paid",
  color: "softBlue",
  size: "large",
};

export const deleteButton = Template.bind({});
deleteButton.args = {
  children: "Delete",
  color: "softRed",
  size: "large",
};

export const editButton = Template.bind({});
editButton.args = {
  children: "Edit",
  color: "lightGrayishBlue",
  size: "large",
};

export const draftButton = Template.bind({});
draftButton.args = {
  children: "Safe as Draft",
  color: "veryDarkGrayishBlue",
  size: "large",
};

export const newItemButton = Template.bind({});
newItemButton.args = {
  children: "Add New Item",
  color: "lightGrayishBlue",
  size: "large",
  startIcon: <AddIcon />
};
