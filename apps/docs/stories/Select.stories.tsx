import React from "react";
import OptionSelect from "ui/Select";

export default {
  title: "Example",
  component: OptionSelect,
};

const Template = (args) => <OptionSelect {...args} />;

export const Option = Template.bind({});
Option.args = {
  label: "Select",
  color: "primary",
  variant: "outlined",
};
