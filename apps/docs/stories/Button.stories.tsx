import React from "react";

import { Button } from "./Button";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Button",
  argTypes: {
    text: { control: "text" },
    isDisabled: { control: "boolean" },
    shadow: { control: "boolean" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    type: {
      control: { type: "select", options: ["filled", "outline", "text"] },
    },
    textColor: {
      control: { type: "select", options: ["default", "white", "primary"] },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const defaultButton = Template.bind({});
defaultButton.args = {
  type: "default",
  text: "Default",
  backgroundColor: "default",
  textColor: "white",
  shadow: true,
};
export const paidButton = Template.bind({});
paidButton.args = {
  type: "default",
  text: "Mark as Paid",
  backgroundColor: "default",
  textColor: "white",
  shadow: true,
};

export const defaultDisabledButton = Template.bind({});
defaultDisabledButton.args = {
  text: "Disabled",
  backgroundColor: "default",
  textColor: "default",
  shadow: false,
  isDisabled: true,
};

export const outlineButton = Template.bind({});
outlineButton.args = {
  text: "Default",
  textColor: "primary",
  type: "outline",
};

export const textButton = Template.bind({});
textButton.args = {
  text: "Edit",
  backgroundColor: "transparent",
  textColor: "primary",
  shadow: false,
  type: "text",
};

export const editLightButton = Template.bind({});
editLightButton.args = {
  text: "Edit",
  backgroundColor: "gray-light",
  textColor: "primary",
  shadow: false,
  type: "text",
};

export const editDarkButton = Template.bind({});
editDarkButton.args = {
  text: "Edit",
  backgroundColor: "dark-blue",
  textColor: "white2",
  shadow: false,
  type: "text",
};

export const textDisabledButton = Template.bind({});
textDisabledButton.args = {
  text: "Disabled",
  shadow: false,
  isDisabled: true,
  textColor: "default",
  type: "text",
};

export const disableShadow = Template.bind({});
disableShadow.args = {
  text: "Default",
  backgroundColor: "primary",
  type: "filled",
  textColor: "white",
  shadow: true,
};

export const primaryButton = Template.bind({});
primaryButton.args = {
  text: "Safe as Draft",
  backgroundColor: "primary",
  textColor: "default",
  shadow: true,
};
export const secondaryButton = Template.bind({});
secondaryButton.args = {
  text: "Safe as Draft",
  backgroundColor: "secondary",
  textColor: "white",
  shadow: true,
};

export const deleteButton = Template.bind({});
deleteButton.args = {
  text: "Delete",
  backgroundColor: "danger",
  textColor: "white",
  shadow: true,
};
export const newItemButton = Template.bind({});
newItemButton.args = {
  text: "Add New Item",
  backgroundColor: "gray-light",
  type: "filled",
  plusIcon: true,
  textColor: "primary",
  shadow: true,
};
export const newInvoiceButton = Template.bind({});
newInvoiceButton.args = {
  text: "New Invoice",
  backgroundColor: "default",
  type: "filled",
  endIcon: true,
  textColor: "white",
  shadow: true,
};
