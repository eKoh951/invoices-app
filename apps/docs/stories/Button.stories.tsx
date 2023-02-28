import React from "react";
import { Button } from "ui";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
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
    children: {
      control: { type: "select", options: ["white", "mostlyBlack"] },
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
  label: "New Invoice",
  color: "softBlue",
  size: "large",
};

export const paidButton = Template.bind({});
paidButton.args = {
  label: "Mark as Paid",
  color: "softBlue",
  size: "large",
};

export const deleteButton = Template.bind({});
deleteButton.args = {
  label: "Delete",
  color: "softRed",
  size: "large",
};

export const editButton = Template.bind({});
editButton.args = {
  label: "Edit",
  color: "lightGrayishBlue",
  size: "large",
};

export const draftButton = Template.bind({});
draftButton.args = {
  label: "Safe as Draft",
  color: "veryDarkGrayishBlue",
  size: "large",
};

export const newItemButton = Template.bind({});
newItemButton.args = {
  label: "Add New Item",
  color: "lightGrayishBlue",
  size: "large",
};
