import React from "react";
import ResponsiveNavBar from "ui/ResponsiveNavBar";

export default {
  title: "Example/Appbar",
  component: ResponsiveNavBar,
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

const Template = (args) => <ResponsiveNavBar {...args} />;

export const NavBar = Template.bind({});
NavBar.args = {
  label: "center",
};
